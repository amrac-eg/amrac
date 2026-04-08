"use client";
import FormFields from "@/components/form-fields/form-fields";
import { Button } from "@/components/ui/button";
import { validationErrors } from "@/validation/auth";
import { CameraIcon } from "lucide-react";
import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import useFormFields from "@/components/hooks/useFormFields";
import { Routes } from "@/components/constants/enums";
import { addservice } from "../_action/services";
type InitialStateType = {
  message?: string;
  error?: validationErrors;
  status?: number | null;
  formData?: FormData;
};
const initialState: InitialStateType = {
  message: "",
  error: {},
  status: null,
  formData: new FormData(),
};

const Form = () => {
  const { getFormFields } = useFormFields({ slug: `/${Routes.ADMIN}` });
  const [selectedImage, setSelectedImage] = useState("");
  const [state, action, pending] = useActionState(addservice, initialState);
  useEffect(() => {
    if (state.message) {
      toast(state.message, {
        className: state.status === 200 ? "text-green-400" : "text-destructive",
      });
      setSelectedImage("");
    }
  }, [state.message, state.status]);

  return (
    <form action={action} className="flex flex-col md:flex-row gap-10">
      <div className="group relative w-[200px] h-[200px] overflow-hidden mx-auto">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt={"profile"}
            width={200}
            height={200}
            className=" object-cover"
          />
        )}
        <div
          className={`${
            selectedImage
              ? "group-hover:opacity-[1] opacity-0  transition-opacity duration-200"
              : ""
          } absolute top-0 left-0 w-full h-full bg-gray-50/40`}
        >
          <UploadImage setSelectedImage={setSelectedImage} />
        </div>
      </div>
      <div className="flex-1">
        <div>
          {getFormFields().map((field) => {
            const defaultValue = state?.formData?.get(field.name) || "";
            return (
              <div key={field.name} className="mb-3">
                <FormFields
                  error={state?.error}
                  {...field}
                  defaultValue={defaultValue.toString()}
                />
              </div>
            );
          })}
        </div>
        <Button disabled={pending} className="w-full" type="submit">
          {pending ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
const UploadImage = ({
  setSelectedImage,
}: {
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="image-upload"
        onChange={handleImageChange}
        name="image"
      />
      <label
        htmlFor="image-upload"
        className="border  w-[200px] h-[200px] element-center cursor-pointer"
      >
        <CameraIcon className="!w-8 !h-8 text-accent" />
      </label>
    </>
  );
};
