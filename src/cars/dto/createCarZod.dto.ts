import { z } from 'zod';

export const createCarSchema = z.object({
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().positive().int(),
  price: z.number().positive().int(),
  location: z.string().min(1),
  transmission: z.string().min(1),
  mileage: z.string().min(1),
  color: z.string().min(1),
  image: z.string().optional(),
});

export type CreateCarDto = z.infer<typeof createCarSchema>;