import { check } from 'express-validator';

export const signupValidation = [
  check('name').not().isEmpty(),
  check('email').isEmail(),
  check('password').isLength({ min: 6 }),
];

export const signInValidation = [
  check('email').isEmail(),
  check('password').not().isEmpty(),
];
