import cloudinary from "@/lib/cloudinary";

// بديل لـ uploadToCloudinary بدون الحاجة لـ API endpoint
const uploadToCloudinaryDirect = async (file: File): Promise<string> => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "services",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result?.secure_url || "");
        },
      )
      .end(buffer);
  });
};
