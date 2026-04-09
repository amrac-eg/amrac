"use client";
import { Ourwork } from "@prisma/client";
import {
  SetStateAction,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CameraIcon } from "lucide-react";
import { toast } from "sonner";
import { validationErrors } from "@/validation/auth";
import { addourworkImage } from "../../our-work/_action/ourworkaction";
import { Button } from "@/components/ui/button";
import Image from "next/image";
type InitialStateType = {
  message?: string;
  error?: validationErrors;
  status?: number | null;
};
const initialState: InitialStateType = {
  message: "",
  error: {},
  status: null,
};

const Form = ({ ourWork }: { ourWork: Ourwork[] }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [ourwokId, setOurworkId] = useState("");

  console.log(selectedImage);

  const [state, action, pending] = useActionState(
    addourworkImage.bind(null, ourwokId),
    initialState
  );

  useEffect(() => {
    if (state.message) {
      toast.success(state.message, {
        className: state.status === 200 ? "text-green-400" : "text-destructive",
      });
      setSelectedImage(""); 
    }
  }, [state.message, state.status]);
  useEffect(() => {
    if (ourWork.length > 0 && !ourwokId) {
      setOurworkId(ourWork[0].id); 
    } 
    setSelectedImage("");

  }, [ourWork, ourwokId, state.message, state.status]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-center text-primary mb-4">
        Upload Image to Our Work
      </h2>

      <form action={action} className="space-y-4">
        <SelectId
          ourWork={ourWork}
          ourwokId={ourwokId}
          setOurworkId={setOurworkId}
        />

        <UploadImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Uploading..." : "Upload"}
        </Button>
      </form>
    </div>
  );
};

export default Form;

const SelectId = ({
  ourWork,
  ourwokId,
  setOurworkId,
}: {
  ourWork: Ourwork[];
  ourwokId: string;
  setOurworkId: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Select
      onValueChange={(value) => setOurworkId(value)}
      defaultValue={ourwokId}
    >
      <SelectTrigger className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary">
        <SelectValue placeholder="Select Our Work" />
      </SelectTrigger>
      <SelectContent className="z-50 bg-white border border-gray-300 rounded-lg shadow-md">
        <SelectGroup>
          {ourWork.map((name, index) => (
            <SelectItem
              key={index}
              value={name.id}
              className="hover:bg-primary/10 focus:bg-primary/10"
            >
              {name.title_ar}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const UploadImage = ({
  setSelectedImage,
  selectedImage,
}: {
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  selectedImage: string;
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        id="image-upload"
        onChange={handleImageChange}
        name="image" // Important: allows FormData to pick it up
      />
      {!selectedImage ? (
        <label
          htmlFor="image-upload"
          className="w-48 h-48 flex items-center justify-center border-2 border-dashed border-primary text-primary rounded-xl cursor-pointer hover:bg-primary/10 transition"
        >
          <CameraIcon className="w-8 h-8" />
        </label>
      ) : (
        <label htmlFor="image-upload" className="cursor-pointer">
          <Image
            src={selectedImage as string}
            alt="Preview"
            width={192}
            height={192}
            className="object-cover rounded-xl border"
          />
        </label>
      )}
    </div>
  );
};
