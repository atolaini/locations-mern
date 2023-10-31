import { Router } from 'express';
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
router.post('/', createPlace);
router.patch('/:placeid', updatePlace);
router.delete('/:placeid', deletePlace);

export { router as placesRoutes };
