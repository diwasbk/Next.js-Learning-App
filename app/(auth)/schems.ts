import z from "zod";

/* Password Reset Email Schema */
export const sendPasswordResetEmailSchema = z.object({
    email: z.string().nonempty("Email is required.").email({ message: "Please enter a valid email address." }),
})
export type sendPasswordResetEmailType = z.infer<typeof sendPasswordResetEmailSchema>;


/* Reset Password Schema */
export const resetPasswordSchema = z.object({
    token: z.string().nonempty("Token is required."),
    password: z.string().nonempty("New Password is required.").min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string().nonempty("Confirm Password is required."),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"] // error shows under confirmPassword
});
export type resetPasswordType = z.infer<typeof resetPasswordSchema>;