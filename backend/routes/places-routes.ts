import { Router } from 'express';
import {
  createPlaceValidation,
  updatePlaceValidation,
} from '../validation/places-validation';

import {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
} from '../controllers/placesControllers';

const router = Router();

router.get('/:placeid', getPlaceById);
router.get('/user/:uid', getPlacesByUserId);
router.post('/', createPlaceValidation, createPlace);
router.patch('/:placeid', updatePlaceValidation, updatePlace);
router.delete('/:placeid', deletePlace);

export { router as placesRoutes };
