"use client";
import { Button } from "@/components/ui/button";
import { ImagemyWork, Ourwork } from "@prisma/client";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { deletemywork } from "../_action/ourworkaction";

type StateType = {
  isLoading: boolean;
  message: string;
  status: number | null;
};
interface DeleteOurWorkProps {
  ourWork: Ourwork & { images?: ImagemyWork[] };
}

const DeleteOurWork = ({ ourWork }: DeleteOurWorkProps) => {
  const [state, setState] = useState<StateType>({
    isLoading: false,
    message: "",
    status: null,
  });

  const handleDelete = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      // Collect all publicIds to delete
      const publicIds = [
        ourWork.publicId, // Main image publicId
        ...(ourWork.images?.map((img) => img.publicId).filter(Boolean) || []), // Additional images publicIds
      ].filter(Boolean) as string[];

      const res = await deletemywork({
        id: ourWork.id,
        publicIds, // Pass array of all publicIds to delete
      });

      setState({ message: res.message, status: res.status, isLoading: false });
      toast.success("Work deleted successfully");
    } catch (error) {
      console.error(error);
      setState((prev) => ({ ...prev, isLoading: false }));
      toast.error("Failed to delete work");
    }
  };

  return (
    <Button
      variant="destructive"
      size="sm"
      disabled={state.isLoading}
      onClick={handleDelete}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

export default DeleteOurWork;
