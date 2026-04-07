"use server";

import { Pages, Routes } from "@/components/constants/enums";
import { db } from "@/server/db/prisma";
import { contactSchemaValidation } from "@/validation/contact";
import { revalidatePath } from "next/cache";
import { sendContactEmail } from "@/lib/mailer";

export const addContact = async (prevState: unknown, formData: FormData) => {
  const result = contactSchemaValidation.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      status: 400,
      formData,
    };
  }

  const data = result.data;
  console.log(data);
  try {
    await db.contactForm.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
    });
    await sendContactEmail(data);
    revalidatePath(`/${Routes.ADMIN}/${Pages.CONTACT_ADMIN}`);
    revalidatePath(`/${Routes.CONTACT}`);
    return {
      status: 200,
      message: "تم ارسال الرسالة بنجاح",
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const deleteContact = async (id: string) => {
  try {
    await db.contactForm.delete({
      where: {
        id: id,
      },
    });
    revalidatePath(`/${Routes.ADMIN}/${Pages.CONTACT_ADMIN}`);
    revalidatePath(`/${Routes.CONTACT}`);

    return {
      status: 200,
      message: "تم حذف الرسالة بنجاح",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};
