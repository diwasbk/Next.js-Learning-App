"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, loginType } from "../login/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleUserLogin } from "@/app/lib/actions/auth-actions";

export default function LoginForm() {
    const router = useRouter();
    const [isPending, setTransition] = useTransition();
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<loginType>(
        {
            resolver: zodResolver(loginSchema)
        }
    );

    const onSubmit = async (data: loginType) => {
        setError("");

        try {
            const res = await handleUserLogin(data);

            if (!res.success) {
                throw new Error(res.message || "Login failed!");
            }

            setTransition(()=>{
                router.push("/example/dashboard")
            })

        } catch (err: any) {
            setError(err.message || "Login failed!");
        };
    };

    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">

                {/* Title */}
                <h1 className="text-3xl font-bold text-center mb-2">
                    Welcome Back
                </h1>
                <p className="text-center text-gray-400 mb-8">
                    Login to your account
                </p>

                {/* Server Error */}
                    {error && (
                        <div className="p-3 bg-yellow-200 border border-red-500 text-sm text-red-500 mb-2 rounded-xl"> {error}</div>
                    )}

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

                    <div>
                        <label className="block text-sm text-gray-300 mb-1">
                            Password
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && (
                            <p className="text-xs text-red-500 mt-2">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-blue-500" />
                            Remember me
                        </label>
                        <Link href="/forgot-password" className="hover:text-blue-400 transition">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold cursor-pointer"
                    >
                        {isPending ? "Logging..." : "Login"}
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-400 text-sm mt-6">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-blue-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </main>
    );
}
