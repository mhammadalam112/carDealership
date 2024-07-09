import { z } from 'zod';

export const createUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  role: z.string().min(1),
});

