"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export const useContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name,
            email,
            message
        }
        console.log(data)
        alert("Thank you for reaching out! Your message has been sent successfully. I'll get back to you soon.");
        router.push("/")
    }

    return {
        name, email, message,
        setName, setEmail, setMessage,
        handleSubmit
    }
}