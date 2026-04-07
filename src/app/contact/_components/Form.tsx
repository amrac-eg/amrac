"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { validationErrors } from "@/validation/auth";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { addContact } from "../_action/contactaction";

type InitialStateType = {
  message?: string;
  status?: number | null;
  error?: validationErrors;

  formData?: FormData;
};
const initialState: InitialStateType = {
  message: "",
  status: null,
  formData: new FormData(),
  error: {},
};

const Form = () => {
  const contactFormFields = [
    {
      label: "الاسم الكامل",
      name: "name",
      type: "text",
      placeholder: "ادخل اسمك",
      autoFocus: true,
    },
    {
      label: "رقم الجوال",
      name: "phone",
      type: "tel",
      placeholder: "ادخل رقم الجوال",
      autoFocus: true,
    },
    {
      label: "الايميل",
      name: "email",
      type: "email",
      placeholder: "ادخل الايميل",
      autoFocus: true,
    },
    {
      label: "الرسالة",
      name: "message",
      type: "textarea",
      placeholder: "ادخل رسالتك هنا ...",
      autoFocus: true,
    },
  ];

  const [state, action, pending] = useActionState(addContact, initialState);
  useEffect(() => {
    if (state.message) {
      toast(state.message, {
        className: state.status === 200 ? "text-green-400" : "text-destructive",
      });
    }
  }, [state.message, state.status]);

  return (
    <form action={action} className="space-y-4">
      {contactFormFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-gray-700 mb-2 ">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <>
              <Textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <span className="text-red-500">{state.error?.[field.name]}</span>
            </>
          ) : (
            <>
              <input
                id={field.name}
                name={field.name}
                type="text"
                placeholder={field.placeholder}
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <span className="text-red-500">{state.error?.[field.name]}</span>
            </>
          )}
        </div>
      ))}

      <Button type="submit" className="w-fit">
        {pending ? "جاري الارسال..." : "ارسل"}
      </Button>
    </form>
  );
};

export default Form;
