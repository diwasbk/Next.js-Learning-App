import z from "zod";

/* Password Reset Email Schema */
export const sendPasswordResetEmailSchema = z.object({
    email: z.string().nonempty("Email is required.").email({ message: "Please enter a valid email address." }),
})
export type sendPasswordResetEmailType = z.infer<typeof sendPasswordResetEmailSchema>;