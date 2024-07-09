import { z } from 'zod';

export const createCarSchema = z.object({
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.string().min(1),
  price: z.string().min(1),
  location: z.string().min(1),
  transmission: z.string().min(1),
  mileage: z.string().min(1),
  color: z.string().min(1),
  image: z.string().optional(),
});