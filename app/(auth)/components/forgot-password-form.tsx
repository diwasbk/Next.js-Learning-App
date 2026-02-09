"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { sendPasswordResetEmailSchema, sendPasswordResetEmailType } from "../schems";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleSendPasswordResetEmail } from "@/app/lib/actions/auth-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordForm() {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<sendPasswordResetEmailType>(
        {
            resolver: zodResolver(sendPasswordResetEmailSchema)
        }
    );

    const onSubmit = async (data: sendPasswordResetEmailType) => {
        setError("");
        setIsPending(true);

        try {
            const res = await handleSendPasswordResetEmail(data);

            if (!res.success) {
                throw new Error(res.message || "Failed to send password reset email!")
            }

            router.push("/")

        } catch (err: any) {
            console.log(err.message || "Failed to send password reset email!")
            
        } finally {
            setIsPending(false);
        }
    }

    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">

                {/* Title */}
                <h1 className="text-3xl font-bold text-center mb-2">
                    Forgot Password
                </h1>
                <p className="text-center text-gray-400 mb-8">
                    Enter your email to receive a password reset link
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-xs text-red-500 mt-2">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
                    >
                        {isPending ? "Sending Reset Link..." : "Send Reset Link"}
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-400 text-sm mt-6">
                    Remembered your password?{" "}
                    <Link href="/login" className="text-blue-400 hover:underline">
                        Back to Login
                    </Link>
                </p>
            </div>
        </main>
    );
}
