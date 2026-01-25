"use server"
import { loginType } from "@/app/(auth)/login/schema";
import { loginUser } from "../api/auth";
import { clearAuthCookies, setAuthToken, setUserData } from "../cookie";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

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
}