import * as z from 'zod';

export const userValidationLogin = (isLogin: boolean) => {
  return z.object({
    username: !isLogin
      ? z
          .string()
          .min(3, { message: 'Username must be at least 6 characters long' })
      : z.string().optional(),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
  });
};
