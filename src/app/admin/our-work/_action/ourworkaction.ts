"use server";

import { Pages, Routes } from "@/components/constants/enums";
import { revalidatePath } from "next/cache";
import { serviceSchema } from "@/validation/services/serviceSchema";
import { db } from "@/server/db/prisma";
import { v2 as cloudinary } from 'cloudinary';
import { imageToOurWorkSchema, ourWorkSchema } from "@/validation/Ourwork";

// تكوين Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// دالة مساعدة لرفع الصورة إلى Cloudinary
const uploadToCloudinary = async (file: File, folder: string = "services"): Promise<{ url: string; publicId: string }> => {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // تحقق من التكوين قبل الرفع
    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      throw new Error("CLOUDINARY_CLOUD_NAME is not configured");
    }
    
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: folder,
          resource_type: 'auto',
          transformation: [
            { width: 1200, height: 800, crop: 'limit' },
            { quality: 'auto' },
            { fetch_format: 'auto' }
          ]
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error details:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      ).end(buffer);
    });

    return { 
      url: (result as any).secure_url, 
      publicId: (result as any).public_id 
    };
  } catch (error) {
    console.error("Error in uploadToCloudinary:", error);
    throw new Error(`Failed to upload to Cloudinary: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// دالة مساعدة لحذف الصورة من Cloudinary
const deleteFromCloudinary = async (publicId: string) => {
  try {
    if (!publicId) return;
    const result = await cloudinary.uploader.destroy(publicId);
    console.log(`Deleted from Cloudinary: ${publicId}`, result);
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

  // رفع الصورة إلى Cloudinary إذا وجدت
  if (imageFile && imageFile.size > 0) {
    try {
      console.log("Uploading image to Cloudinary...");
      const uploadResult = await uploadToCloudinary(imageFile, "services/main");
      imageUrl = uploadResult.url;
      publicId = uploadResult.publicId;
      console.log("Upload successful:", imageUrl);
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
        title: data.title,
        description: data.description,
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
      
      // حذف الصورة القديمة من Cloudinary إذا كانت موجودة
      if (publicId && publicId !== "") {
        await deleteFromCloudinary(publicId);
      }

      // رفع الصورة الجديدة إلى Cloudinary
      const uploadResult = await uploadToCloudinary(imageFile, "services/main");
      imageUrl = uploadResult.url;
      newPublicId = uploadResult.publicId;
      
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
        title: data.title,
        description: data.description,
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
  // حذف الصورة من Cloudinary إذا كانت موجودة
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







// دالة مساعدة لحذف صور متعددة من Cloudinary
const deleteMultipleFromCloudinary = async (publicIds: string[]) => {
  try {
    const validPublicIds = publicIds.filter(id => id && id.trim() !== "");
    if (validPublicIds.length === 0) return;
    
    await Promise.all(
      validPublicIds.map(async (publicId) => {
        await deleteFromCloudinary(publicId);
      })
    );
  } catch (error) {
    console.error("Error deleting multiple images from Cloudinary:", error);
  }
};

export const addourwork = async (prevState: unknown, formData: FormData) => {
  const result = ourWorkSchema().safeParse(
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
  const imageFile = data?.image as File;
  
  let imageUrl = "";
  let publicId = "";

  if (imageFile?.size) {
    try {
      const uploadResult = await uploadToCloudinary(imageFile, "ourwork/main");
      imageUrl = uploadResult.url;
      publicId = uploadResult.publicId;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      return {
        status: 500,
        message: "Failed to upload image",
      };
    }
  }

  try {
    await db.ourwork.create({
      data: {
        title: data.title,
        date: data.date,
        image: imageUrl,
        publicId: publicId,
      },
    });

    revalidatePath(`/${Routes.ADMIN}/${Pages.OURWORK}`);
    revalidatePath(`/${Pages.OURWORK}`);
    revalidatePath(`/`);

    return {
      status: 200,
      message: "تم اضافة المشروع بنجاح",
    };
  } catch (error) {
    console.log(error);
    if (publicId) {
      await deleteFromCloudinary(publicId);
    }
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const addourworkImage = async (
  id_work: string,
  prevState: unknown,
  formData: FormData
) => {
  const result = imageToOurWorkSchema().safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      status: 400,
      formData,
    };
  }

  if (!id_work) {
    return {
      status: 400,
      message: "Please select a valid Our Work item",
    };
  }

  const data = result.data;
  const imageFile = data?.image as File;

  if (!imageFile?.size) {
    return {
      status: 400,
      message: "Image is required",
    };
  }

  let imageUrl = "";
  let publicId = "";

  try {
    const uploadResult = await uploadToCloudinary(imageFile, "ourwork/gallery");
    imageUrl = uploadResult.url;
    publicId = uploadResult.publicId;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return {
      status: 500,
      message: "Failed to upload image",
    };
  }

  try {
    await db.imagemyWork.create({
      data: {
        image: imageUrl,
        ourworkId: id_work,
        publicId: publicId,
      },
    });

    revalidatePath(`/${Routes.ADMIN}/${Pages.OURWORK}`);
    revalidatePath(`/${Pages.OURWORK}`);
    revalidatePath(`/`);
    revalidatePath(`/${Routes.ADMIN}/${Pages.OURWORK}/${id_work}`);
    revalidatePath(`/${Pages.OURWORK}/${id_work}`);

    return {
      status: 200,
      message: "Image added successfully",
    };
  } catch (error) {
    console.error("Error adding work image:", error);
    if (publicId) {
      await deleteFromCloudinary(publicId);
    }
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const updatemywork = async (
  id: string,
  publicId: string,
  prevState: unknown,
  formData: FormData
) => {
  const result = ourWorkSchema().safeParse(
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
  const imageFile = data?.image as File;
  const hasNewImage = Boolean(imageFile?.size);
  
  let imageUrl;
  let newPublicId;

  if (hasNewImage) {
    try {
      if (publicId) {
        await deleteFromCloudinary(publicId);
      }

      const uploadResult = await uploadToCloudinary(imageFile, "ourwork/main");
      imageUrl = uploadResult.url;
      newPublicId = uploadResult.publicId;
    } catch (error) {
      console.error("Error updating image:", error);
      return {
        status: 500,
        message: "Failed to update image",
      };
    }
  }

  try {
    const mywork = await db.ourwork.findUnique({
      where: { id },
    });

    if (!mywork) {
      return {
        status: 404,
        message: "My Work not found",
      };
    }

    const updatedWork = await db.ourwork.update({
      where: { id },
      data: {
        title: data.title,
        date: data.date,
        image: hasNewImage ? imageUrl : mywork.image,
        publicId: hasNewImage ? newPublicId : mywork.publicId,
      },
    });

    const id_work = updatedWork.id;

    revalidatePath(`/${Routes.ADMIN}/${Pages.OURWORK}`);
    revalidatePath(`/${Pages.OURWORK}`);
    revalidatePath(`/`);
    revalidatePath(`/admin/our-work/${id_work}`);
    revalidatePath(`/our-work/${id_work}`);
    revalidatePath(`/ar/admin/our-work/${id_work}`);
    revalidatePath(`/ar/our-work/${id_work}`);
    revalidatePath(`/en/admin/our-work/${id_work}`);
    revalidatePath(`/en/our-work/${id_work}`);

    return {
      status: 200,
      message: "تم تحديث المشروع بنجاح",
    };
  } catch (error) {
    console.error("Error updating work:", error);
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const deletemywork = async ({
  id,
  publicIds = [],
}: {
  id: string;
  publicIds: string[];
}) => {
  try {
    if (publicIds && publicIds.length > 0) {
      await deleteMultipleFromCloudinary(publicIds);
    }

    const deletedWork = await db.ourwork.delete({
      where: { id },
      include: { images: true },
    });

    if (!deletedWork) {
      return {
        status: 404,
        message: "Work not found",
      };
    }
    
    const id_work = deletedWork.id;
    
    revalidatePath(`/${Routes.ADMIN}/${Pages.OURWORK}`);
    revalidatePath(`/${Pages.OURWORK}`);
    revalidatePath(`/`);
    revalidatePath(`/admin/our-work/${id_work}`);
    revalidatePath(`/our-work/${id_work}`);
    revalidatePath(`/ar/admin/our-work/${id_work}`);
    revalidatePath(`/ar/our-work/${id_work}`);
    revalidatePath(`/en/admin/our-work/${id_work}`);
    revalidatePath(`/en/our-work/${id_work}`);
    
    return {
      status: 200,
      message: "Work and all associated images deleted successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Failed to delete work",
    };
  }
};

export const deleteImageFromMyWork = async ({
  id,
  publicId,
  id_mywork,
}: {
  id: string;
  publicId: string;
  id_mywork: string;
}) => {
  try {
    if (publicId) {
      await deleteFromCloudinary(publicId);
    }
  } catch (error) {
    console.error("Failed to delete from Cloudinary", error);
  }

  try {
    const deletedWork = await db.imagemyWork.delete({
      where: {
        id: id,
      },
    });

    const id_work = deletedWork.id;
    
    revalidatePath(`/${Routes.ADMIN}/${Pages.OURWORK}`);
    revalidatePath(`/${Pages.OURWORK}`);
    revalidatePath(`/`);
    revalidatePath(`/admin/our-work/${id_work}`);
    revalidatePath(`/our-work/${id_work}`);
    revalidatePath(`/ar/admin/our-work/${id_work}`);
    revalidatePath(`/ar/our-work/${id_work}`);
    revalidatePath(`/en/admin/our-work/${id_work}`);
    revalidatePath(`/en/our-work/${id_work}`);
    revalidatePath(`/our-work/${id_mywork}`);
    revalidatePath(`/ar/our-work/${id_mywork}`);
    revalidatePath(`/en/our-work/${id_mywork}`);

    return {
      status: 200,
      message: "Image deleted successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};