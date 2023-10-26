import * as z from 'zod';

export const placeValidation = z.object({
  title: z.string().min(1, { message: 'Please add a title' }).max(40),
  description: z
    .string()
    .min(5, { message: 'Please add a description' })
    .max(400),
});
