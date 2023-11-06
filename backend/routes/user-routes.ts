import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  logUserIn,
} from '../controllers/usersControllers';

const router = Router();

router.get('/', getAllUsers);
router.post('/signup', createUser);
router.post('/login', logUserIn);

export { router as usersRoutes };
