// This is schema/types for form and field validation
import { z } from "zod";

export const UserSchema = z.object({
  //   --- required fields ---
  username: z
    .string({ required_error: "Username is required" })
    .min(3, { message: "Minium 3 characters long" }),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email(),
  password: z
    .string({ required_error: "Password field is required" })
    .min(8, { message: "Password should be at least 8 characters long" }),

  //   --- optional fields ---
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  is_active: z.string().default("True"),
});

export const EditUserSchema = z.object({
  //   --- required fields ---
  username: z
    .string({ required_error: "Username is required" })
    .min(3, { message: "Minium 3 characters long" }),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email(),
  //   --- optional fields ---
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  is_active: z.string().default("True"),
});

export type TEditUser = z.infer<typeof EditUserSchema>;
