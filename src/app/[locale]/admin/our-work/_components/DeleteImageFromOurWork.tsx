"use client";
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { toast } from 'sonner';
import { deleteImageFromMyWork } from '../_action/ourworkaction';
import { Trash2 } from 'lucide-react';


type StateType = {
    isLoading: boolean;
    message: string;
    status: number | null;
  };

const DeleteImageFromOurWork = ({id_mywork, publicId, id }: {id_mywork: string, publicId: string, id: string}) => {
  console.log(publicId, id);


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
          const res = await deleteImageFromMyWork({ id, publicId , id_mywork});
          setState((prev) => {
            return { ...prev, message: res.message, status: res.status };
          });
          toast.success("Image deleted successfully");
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
  )
}

export default DeleteImageFromOurWork
