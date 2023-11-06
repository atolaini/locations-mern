import { check } from 'express-validator';
import { updatePlace } from '../controllers/placesControllers';

export const createPlaceValidation = [
  check('title').not().isEmpty(),
  check('description').isLength({ min: 5 }),
  check('address').not().isEmpty(),
];

export const updatePlaceValidation = [
  check('title').not().isEmpty(),
  check('description').isLength({ min: 5 }),
];
