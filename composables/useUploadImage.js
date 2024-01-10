import { openUploadModal } from "@bytescale/upload-widget-vue";

export default function useUploadImage() {
  let imageURL = ref(null);
  const options = {
    apiKey: "public_12a1ymSEMqTZftir7Sk5q4pFYKZ3",
    maxFileCount: 1,
  };

  const uploadFile = (event) => {
    openUploadModal({
      event,
      options,
      onComplete: (files) => {
        if (files.length === 0) {
          alert("No files selected.");
        } else {
          imageURL.value = files.map((f) => f.fileUrl).join("\n");
        }
      },
    });
  };

  return { imageURL, uploadFile };
}
