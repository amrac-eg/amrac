import { IFormField, IFormFieldsVariables } from "@/types/app";
import { Pages, Routes } from "../constants/enums";

const useFormFields = ({ slug }: IFormFieldsVariables) => {
  const loginFields = (): IFormField[] => [
    {
      label: "الايميل",
      name: "email",
      type: "email",
      placeholder: "الايميل",
      autoFocus: true,
    },
    {
      label: "كلمة المرور",
      name: "password",
      placeholder: "كلمة المرور",
      type: "password",
    },
  ];

  const servicesFields = (): IFormField[] => [
    {
      label: "العنوان",
      name: "title_ar",
      type: "text",
      placeholder: "العنوان",
      autoFocus: true,
    },
    {
      label: "title",
      name: "title_en",
      type: "text",
      placeholder: "title",
    },

    {
      label: "الوصف",
      name: "description_ar",
      type: "textarea",
      placeholder: "الوصف",
    },
    {
      label: "description",
      name: "description_en",
      type: "textarea",
      placeholder: "description",
    },
  ];

  const ourWorkFields = (): IFormField[] => [
    {
      label: "اسم المشروع",
      name: "title_ar",
      type: "text",
      placeholder: "اسم المشروع",
    },
    {
      label: "title",
      name: "title_en",
      type: "text",
      placeholder: "title",
    },

    {
      label: "تاريخ ",
      name: "date",
      type: "date",
      placeholder: "تاريخ ",
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.LOGIN:
        return loginFields();

      case `/${Routes.ADMIN}`:
        return servicesFields();

      case `/${Routes.ADMIN}/${Pages.OURWORK}`:
        return ourWorkFields();
      default:
        return [];
    }
  };

  return { getFormFields };
};

export default useFormFields;
