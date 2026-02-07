import { loginType } from "@/app/(auth)/login/schema";
import axiosInstance from "./axios";
import { API } from "./endpoints";
import { resetPasswordType, sendPasswordResetEmailType } from "@/app/(auth)/schems";

export const loginUser = async (data: loginType) => {
    try {
        const response = await axiosInstance.post(API.auth.login, data);
        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.message || "Login failed!");
    }
}

export const sendPasswordResetEmail = async (data: sendPasswordResetEmailType) => {
    try {
        const response = await axiosInstance.post(API.auth.forgot_password, data);
        return response.data;
    } catch (err: Error | any) {
        throw new Error(
            err.response?.data?.message || err.message || "Failed to send password reset email!"
        )
    }
}

export const resetAccountPassword = async (data: resetPasswordType) => {
    try {
        const response = await axiosInstance.put(API.auth.reset_password, data);
        return response.data;
    } catch (err: Error | any) {
        throw new Error(
            err.response?.data?.message || err.message || "Failed to reset password!"
        )
    }
}