// This is schema/types for form and field validation
import { z } from "zod";

export const CustomerSchema = z.object({
    //   --- required fields ---
    firstname: z
        .string({ required_error: "Firstname is required" })
        .min(1, { message: "Firstname is required" }),
    lastname: z
        .string({ required_error: "Lastname is required" })
        .min(1, { message: "Lastname is required" }),
    email: z
        .string({ required_error: "Email is required" })
        .min(1, { message: "Email is required" })
        .email(),
    //   --- optional fields ---
    address: z.string().optional(),
    phone: z.string().optional(),
    active: z.string().optional(),
});

export type TCustomer = z.infer<typeof CustomerSchema>;
