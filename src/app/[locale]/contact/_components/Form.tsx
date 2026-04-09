// Form.tsx (updated)
"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { validationErrors } from "@/validation/auth";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { addContact } from "../_action/contactaction";
import { Locale } from "@/i18n.config";

// Form translations
const formTranslations = {
  ar: {
    fields: [
      {
        label: "الاسم الكامل",
        name: "name",
        type: "text",
        placeholder: "ادخل اسمك",
      },
      {
        label: "رقم الجوال",
        name: "phone",
        type: "tel",
        placeholder: "ادخل رقم الجوال",
      },
      {
        label: "الايميل",
        name: "email",
        type: "email",
        placeholder: "ادخل الايميل",
      },
      {
        label: "الرسالة",
        name: "message",
        type: "textarea",
        placeholder: "ادخل رسالتك هنا ...",
      },
    ],
    sending: "جاري الارسال...",
    send: "ارسل",
  },
  en: {
    fields: [
      {
        label: "Full Name",
        name: "name",
        type: "text",
        placeholder: "Enter your name",
      },
      {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        placeholder: "Enter your phone number",
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your email",
      },
      {
        label: "Message",
        name: "message",
        type: "textarea",
        placeholder: "Enter your message here ...",
      },
    ],
    sending: "Sending...",
    send: "Send",
  },
};

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

const Form = ({ locale }: { locale: Locale }) => {
  const t = formTranslations[locale];
  const isRTL = locale === "ar";

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
      {t.fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className={`block text-gray-700 mb-2 ${isRTL ? "text-right" : "text-left"}`}
          >
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
                type={field.type}
                placeholder={field.placeholder}
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <span className="text-red-500">{state.error?.[field.name]}</span>
            </>
          )}
        </div>
      ))}

      <Button type="submit" className="w-fit">
        {pending ? t.sending : t.send}
      </Button>
    </form>
  );
};

export default Form;
