import { check } from 'express-validator';

export const signupValidation = [
  check('name').not().isEmpty(),
  check('email').normalizeEmail().isEmail(),
  check('password').isLength({ min: 6 }),
];
