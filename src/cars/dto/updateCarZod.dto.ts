import { z } from 'zod';

export const updateCarSchema = z.object({
  make: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  price: z.string().optional(),
  location: z.string().optional(),
  transmission: z.string().optional(),
  mileage: z.string().optional(),
  color: z.string().optional(),
  image: z.string().optional(),
});

