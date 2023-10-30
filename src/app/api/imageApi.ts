import axios from "axios";

export const imageApi = async (image: any) => {
  const formData = new FormData();
  formData.append("file", image);

  try {
    const response = await axios.post("/api/upload", formData);
    return response.data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
