import { check } from 'express-validator';

export const createPlaceValidation = [
  check('title').not().isEmpty(),
  check('description').isLength({ min: 5 }),
  check('address').not().isEmpty(),
];

export const updatePlaceValidation = [
  check('title').not().isEmpty(),
  check('description').isLength({ min: 5 }),
];
