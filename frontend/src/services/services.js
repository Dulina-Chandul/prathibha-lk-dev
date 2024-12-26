import axiosInstance from "@/api/axiosInstance";

export const registerService = async (formData) => {
  const data = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data.data;
};

export const loginService = async (formData) => {
  const data = await axiosInstance.post("/auth/login", formData);

  return data.data;
};

export async function checkAuth() {
  const data = await axiosInstance.get("/auth/check-auth");

  return data.data;
}
