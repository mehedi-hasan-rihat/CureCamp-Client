import axios from "axios";
export const ImgURL = async (img) => {
  const formData = new FormData()
  formData.append('image', img)

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
    formData
  );
 
  return data?.data?.display_url
};
