// This is schema/types for form and field validation
import { z } from 'zod';

export const AuthorSchema = z.object({
    //   --- required fields ---
    user_id: z
        .string({ required_error: 'User is required' })
        .min(1, { message: 'User is required' }),
    bio: z.string().optional(),
});

// export a Author Type with zodSchema
export type TAuthor = z.infer<typeof AuthorSchema>;
