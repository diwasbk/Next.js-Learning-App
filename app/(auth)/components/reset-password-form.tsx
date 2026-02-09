"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { resetPasswordSchema, resetPasswordType } from "../schems";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { handleResetAccountPassword } from "@/app/lib/actions/auth-actions";

export default function ResetPasswordPage() {
    const searchParams = useSearchParams();
    const tokenFromURL = searchParams.get("token");

    const router = useRouter();
    const [isPending, setIsPending] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<resetPasswordType>(
        {
            resolver: zodResolver(resetPasswordSchema),
            defaultValues: {
                token: tokenFromURL || ""
            }
        }
    );

    const onSubmit = async (data: resetPasswordType) => {
        setIsPending(true);

        try {
            const res = await handleResetAccountPassword(data);

            if (!res.success) {
                throw new Error(res.message || "Failed to reset password!")
            }

            router.push("/login")

        } catch (err: any) {
            console.log(err.message || "Password changed successfully!")

        } finally {
            setIsPending(false);
        }

    }
    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">

                {/* Title */}
                <h1 className="text-3xl font-bold text-center mb-2 text-white">
                    Reset Password
                </h1>
                <p className="text-center text-gray-400 mb-8">
                    Please enter your new credentials below
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* New Password */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">
                            New Password
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        {errors.password && (
                            <p className="text-xs text-red-500 mt-2">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">
                            Confirm Password
                        </label>
                        <input
                            {...register("confirmPassword")}
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        {errors.confirmPassword && (
                            <p className="text-xs text-red-500 mt-2">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition font-semibold shadow-lg active:scale-[0.98]"
                    >
                        {isPending ? "Password Resetting..." : "Reset Password"}
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-400 text-sm mt-6">
                    Changed your mind?{" "}
                    <Link href="/login" className="text-blue-400 hover:underline">
                        Back to Login
                    </Link>
                </p>
            </div>
        </main>
    );
}