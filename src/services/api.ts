import axiosInstance from "../utils/axios";

export const loginApi = (params: any) =>
  axiosInstance.post("/auth/login", params);
