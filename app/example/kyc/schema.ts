import { z } from "zod";

export const kycSchema = z.object({
    name: z.string("Full name is required").min(3, "Full name must be at least 3 characters long"),
    email: z.string({ message: "Email address is required" }).email("Please enter a valid email address"),
    idType: z.string("Please select an ID type").min(1, "ID type is required"),
    idNumber: z.string("ID number is required").min(3, "ID number must be at least 3 characters long"),
    address: z.string("Address is required").min(3, "Address must be at least 3 characters long"),
});

export type KycType = z.infer<typeof kycSchema>;
