"use client";
import { deleteContact } from "@/app/contact/_action/contactaction";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
type StateType = {
  isLoading: boolean;
  message: string;
  status: number | null;
};

const DeleteContact = ({ id }: { id: string }) => {
  const [state, setState] = useState<StateType>({
    isLoading: false,
    message: "",
    status: null,
  });

  const handleDelete = async () => {
    setState((prev) => {
      return { ...prev, isLoading: true };
    });
    try {
      const res = await deleteContact(id);
      setState((prev) => {
        return { ...prev, message: res.message, status: res.status };
      });
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setState((prev) => {
        return { ...prev, isLoading: false };
      });
    }
  };
  return (
    <Button
      variant="secondary"
      disabled={state.isLoading}
      onClick={handleDelete}
    >
      <Trash2 />
    </Button>
  );
  
};

export default DeleteContact;
