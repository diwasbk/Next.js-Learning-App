import { loginType } from "@/app/(auth)/login/schema";
import axiosInstance from "./axios";
import { API } from "./endpoints";

export const loginUser = async (data: loginType) => {
    try {
        const response = await axiosInstance.post(API.auth.login, data);
        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.message || "Login failed!");
    }
}