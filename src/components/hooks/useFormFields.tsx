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
      name: "title",
      type: "text",
      placeholder: "العنوان",
      autoFocus: true,
    },

    {
      label: "الوصف",
      name: "description",
      type: "textarea",
      placeholder: "الوصف",
      autoFocus: true,
    },
  ];

  const ourWorkFields = (): IFormField[] => [
    {
      label: "اسم المشروع",
      name: "title",
      type: "text",
      placeholder: "اسم المشروع",
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
