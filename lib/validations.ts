import { z } from 'zod';

export const signUpSchema = z.object({
  username: z.string().min(4),
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});


export const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
}).refine(data => data.email || {
  message: "Email or Username is required",
  path: ["email"], // Attach error to email field
});


export const eventSchema = z.object({
  title: z.string().trim().min(2).max(100),
  description: z.string().trim().min(10).max(1000),
  eventHost: z.string().trim().min(2).max(100),
  category: z.string().trim().min(2).max(50),
  rating: z.number().min(1).max(5),
  availableSpaces: z.coerce.number().int().positive().lte(10000),
  coverUrl: z.string().nonempty(),
  eventDateTime: z.string()
    .nonempty()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format. Use ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)",
    }),
});
