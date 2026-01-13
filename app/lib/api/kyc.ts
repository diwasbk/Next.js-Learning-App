// Backend API call only
import axiosInstance from "./axios";
import { API } from "./endpoints";
export const fillKycDetails = async (kycData: any) => {
    try {
        const response = await axiosInstance.post(API.kyc.fillKyc, kycData);
        return response.data;
    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.message || "KYC submission failed!");
    }
}