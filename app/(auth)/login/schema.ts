import z from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty("Full name is required").email({ message: "Please enter a valid email address." }),
    password: z.string().nonempty("Password is required.")
});

export type loginType = z.infer<typeof loginSchema>;