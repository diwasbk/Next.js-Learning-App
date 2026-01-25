"use server"

import { cookies } from "next/headers"

// Shape of user data stored in cookies
interface UserData {
    name: string;
    email: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    [key: string]: any;
}

// Set auth token cookie
export const setAuthToken = async (token: string) => {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "auth_token",
        value: token
    })
}

// Get auth token from cookie
export const getAuthToken = async () => {
    const cookieStore = await cookies();
    return cookieStore.get("auth_token")?.value || null
}

// Store user data in cookie
export const setUserData = async (userData: UserData) => {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "user_data",
        value: JSON.stringify(userData)
    })
}

// Read user data from cookie
export const getUserData = async (): Promise<UserData | null> => {
    const cookieStore = await cookies();
    const userData = cookieStore.get("user_data")?.value || null;
    return userData ? JSON.parse(userData) : null;
}

// Clear auth-related cookies (logout)
export const clearAuthCookies = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("auth_token");
    cookieStore.delete("user_data");
}