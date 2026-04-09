"use server";

import { Routes } from "@/components/constants/enums";
import { revalidatePath } from "next/cache";
import { serviceSchema } from "@/validation/services/serviceSchema";
import { db } from "@/server/db/prisma";
import cloudinary from "@/lib/cloudinary";

// دالة رفع مباشرة إلى Cloudinary (بدون API route)
const uploadToCloudinaryDirect = async (file: File): Promise<string> => {
  try {
    // تحويل الملف إلى Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // رفع مباشرة إلى Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "services",
            resource_type: "auto",
            transformation: [
              { width: 1200, height: 800, crop: "limit" },
              { quality: "auto" },
              { fetch_format: "auto" },
            ],
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(error);
            } else {
              resolve(result);
            }
          },
        )
        .end(buffer);
    });

    return (result as any).secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};

// دالة حذف من Cloudinary
const deleteFromCloudinary = async (publicId: string) => {
  try {
    if (!publicId) return;
    await cloudinary.uploader.destroy(publicId);
    console.log(`Deleted image with publicId: ${publicId}`);
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
  }
};

export const addservice = async (prevState: unknown, formData: FormData) => {
  const result = serviceSchema().safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      status: 400,
      formData,
    };
  }

  const data = result.data;
  const imageFile = data?.image as File;

  let imageUrl = "";
  let publicId = "";

  // رفع الصورة إذا وجدت
  if (imageFile && imageFile.size > 0) {
    try {
      console.log("Uploading image to Cloudinary...");
      imageUrl = await uploadToCloudinaryDirect(imageFile);
      console.log("Upload successful, URL:", imageUrl);

      // استخراج publicId من URL
      const urlParts = imageUrl.split("/");
      const filename = urlParts[urlParts.length - 1];
      publicId = `services/${filename.split(".")[0]}`;
    } catch (error) {
      console.error("Error uploading image:", error);
      return {
        status: 500,
        message: "فشل في رفع الصورة إلى Cloudinary",
        formData,
      };
    }
  }

  try {
    await db.services.create({
      data: {
        title_ar: data.title_ar,
        title_en: data.title_en,
        description_ar: data.description_ar,
        description_en: data.description_en,
        image: imageUrl,
        publicId: publicId,
      },
    });

    revalidatePath(`/${Routes.ADMIN}`);
    revalidatePath(`${Routes.SERVICES}`);
    revalidatePath(`/`);

    return {
      status: 200,
      message: "تم اضافة الخدمة بنجاح",
    };
  } catch (error) {
    console.log("Database error:", error);
    // إذا فشل الحفظ في قاعدة البيانات، احذف الصورة من Cloudinary
    if (publicId) {
      await deleteFromCloudinary(publicId);
    }
    return {
      status: 500,
      message: "حدث خطأ في قاعدة البيانات",
    };
  }
};

export const UpdateServices = async (
  id: string,
  publicId: string,
  initialState: unknown,
  formData: FormData,
) => {
  const result = serviceSchema().safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      status: 400,
      formData,
    };
  }

  const data = result.data;
  const imageFile = data?.image as File;
  const hasNewImage = Boolean(imageFile?.size);

  let imageUrl;
  let newPublicId;

  if (hasNewImage) {
    try {
      console.log("Updating image...");

      // حذف الصورة القديمة
      if (publicId && publicId !== "") {
        await deleteFromCloudinary(publicId);
      }

      // رفع الصورة الجديدة
      imageUrl = await uploadToCloudinaryDirect(imageFile);
      const urlParts = imageUrl.split("/");
      const filename = urlParts[urlParts.length - 1];
      newPublicId = `services/${filename.split(".")[0]}`;

      console.log("Image updated successfully");
    } catch (error) {
      console.error("Error updating image:", error);
      return {
        status: 500,
        message: "حدث خطأ أثناء تحديث الصورة",
      };
    }
  }

  try {
    const service = await db.services.findUnique({
      where: { id: id },
    });

    if (!service) {
      return {
        status: 404,
        message: "الخدمة غير موجودة",
        formData,
      };
    }

    await db.services.update({
      where: { id: id },
      data: {
        title_ar: data.title_ar,
        title_en: data.title_en,
        description_ar: data.description_ar,
        description_en: data.description_en,
        image: imageUrl ?? service.image,
        publicId: newPublicId ?? service.publicId,
      },
    });

    revalidatePath(`/${Routes.ADMIN}`);
    revalidatePath(`/${Routes.SERVICES}`);
    revalidatePath(`/ar`);

    return {
      status: 200,
      message: "تم تحديث الخدمة بنجاح",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "حدث خطأ ما",
    };
  }
};

export const deleteServices = async ({
  id,
  publicId,
}: {
  id: string;
  publicId?: string;
}) => {
  // حذف الصورة من Cloudinary
  if (publicId && publicId !== "") {
    await deleteFromCloudinary(publicId);
  }

  try {
    await db.services.delete({
      where: { id: id },
    });

    revalidatePath(`/${Routes.ADMIN}`);
    revalidatePath(`/${Routes.SERVICES}`);
    revalidatePath(`/ar`);

    return {
      status: 200,
      message: "تم حذف الخدمة بنجاح",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "حدث خطأ ما",
    };
  }
};
