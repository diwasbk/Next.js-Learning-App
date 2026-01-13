"use client";

import { useForm } from "react-hook-form";
import { kycSchema, KycType } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { handleKycSubmission } from "@/app/lib/actions/kyc-actions";

export default function KYCForm() {
    const router = useRouter()
    const [isPending, setTransition] = useTransition()
    const [err, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<KycType>(
        {
            resolver: zodResolver(kycSchema),
        }
    )

    const onSubmit = async (data: KycType) => {
        setError("")
        try {
            const res = await handleKycSubmission(data)
            if (!res.success) {
                throw new Error(res.message || "KYC submission failed")
            }
            setTransition(() => {
                router.push("/")
            })
        }
        catch (err: any) {
            setError(err.message || "KYC submission failed!")
        }
    }

    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6">
            <div className="w-full max-w-3xl">
                {/* Heading */}
                <div className="text-center m-5">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        KYC{" "}
                        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Verification
                        </span>
                    </h1>
                    <p className="text-gray-400">
                        Please complete your identity verification
                    </p>
                </div>

                {err && <p className="text-red-500 text-center">{err}</p>}

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900/60 backdrop-blur rounded-2xl p-8 space-y-6 border border-gray-800 mb-5">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Full Name
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            placeholder="Your full name"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && (
                            <p className="text-xs text-red-600 mt-2">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-xs text-red-600 mt-2">{errors.email.message}</p>
                        )}
                    </div>

                    {/* ID Type */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            ID Type
                        </label>
                        <select
                            {...register("idType")}
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select ID Type</option>
                            <option value="citizenship">Citizenship</option>
                            <option value="passport">Passport</option>
                            <option value="driving_license">Driving License</option>
                        </select>
                        {errors.idType && (
                            <p className="text-xs text-red-600 mt-2">{errors.idType.message}</p>
                        )}
                    </div>

                    {/* ID Number */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            ID Number
                        </label>
                        <input
                            {...register("idNumber")}
                            type="text"
                            placeholder="Enter ID number"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.idNumber && (
                            <p className="text-xs text-red-600 mt-2">{errors.idNumber.message}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Address
                        </label>
                        <input
                            {...register("address")}
                            placeholder="Your current address"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                        {errors.address && (
                            <p className="text-xs text-red-600 mt-2">{errors.address.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-500 transition cursor-pointer"
                    >
                        Submit KYC
                    </button>
                </form>
            </div>
        </main>
    );
}
