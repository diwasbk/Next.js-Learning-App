import { loginType } from "@/app/(auth)/login/schema";
import { loginUser } from "../api/auth";

export const handleUserLogin = async (data: loginType) => {
    try {
        const result: any = await loginUser(data);

        if (!result.success) {
            return {
                message: result.message || "Login failed!",
                success: false
            };
        };

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