"use server"
import { loginType } from "@/app/(auth)/login/schema";
import { loginUser, resetAccountPassword, sendPasswordResetEmail } from "../api/auth";
import { clearAuthCookies, setAuthToken, setUserData } from "../cookie";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { resetPasswordType, sendPasswordResetEmailType } from "@/app/(auth)/schems";

export const handleUserLogin = async (data: loginType) => {
    try {
        const result: any = await loginUser(data);

        if (!result.success) {
            return {
                message: result.message || "Login failed!",
                success: false
            };
        };

        await setAuthToken(result.token);

        const decoded = jwtDecode<any>(result.token);

        await setUserData({
            email: decoded.email,
            name: decoded.name,
            userId: decoded.userId,
            createdAt: "",
            updatedAt: ""
        });

        return {
            message: result.message || "Login successfully!",
            success: true,
        };

    } catch (err: any) {
        return {
            message: err.message || "Login failed!",
            success: false
        };
    };
};

export const handleLogout = async () => {
    await clearAuthCookies();
    return redirect('/login');
};

export const handleSendPasswordResetEmail = async (data: sendPasswordResetEmailType) => {
    try {
        const result: any = await sendPasswordResetEmail(data);

        if (!result.success) {
            return {
                message: result.message,
                success: false
            }
        }

        return {
            message: result.message || "Password reset email sent successfully!",
            success: true
        }
        
    } catch (err: any) {
        return {
            message: err.message || "Failed to send password reset email!",
            success: false
        }
    }
};