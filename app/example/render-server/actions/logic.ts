"use server"
import { redirect } from "next/navigation"

export const handleRouterChange = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    if (true) {
        redirect("/")
    }
}