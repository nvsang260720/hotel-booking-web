import axiosInstance from "../utils/axios";

export const loginApi = (params: any) =>
  axiosInstance.post("/auth/login", params);
export const registerApi = (params: any) =>
  axiosInstance.post("/auth/signup", params);

export const getAllUserApi = () => axiosInstance.get("/admin/account");
export const getUserApi = (id: string) =>
  axiosInstance.get(`/admin/account/${id}`);
export const deleteUserApi = (id: number) =>
  axiosInstance.delete(`/admin/account/${id}`);
export const updateUserApi = (id: string, params: any) =>
  axiosInstance.put(`/admin/account/${id}`, params);
export const createUserApi = (params: any) =>
  axiosInstance.post("/admin/account", params);
