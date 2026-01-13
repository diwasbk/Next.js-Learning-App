"use client" // user server: for server-side handling (like authentication or sensitive API calls)

import { fillKycDetails } from "../api/kyc";

export const handleKycSubmission = async (formData: any) => {
    try {
        // Call the API to submit KYC details
        const result: any = await fillKycDetails(formData);

        // If the API returns success, return a success response with data
        if (result.success) {
            return {
                success: true,
                message: "KYC submitted successfully!",
                data: result.data,
            };
        }

        // If the API returns failure, return a failure response with message
        return {
            success: false,
            message: result.message || "KYC submission failed!",
        };
    } catch (err: any) {
        return {
            success: false,
            message: err.message || "Submission failed!",
        };
    }
};
