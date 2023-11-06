import { Router } from 'express';
import { signupValidation } from '../validation/users-validation';
import {
  getAllUsers,
  createUser,
  logUserIn,
} from '../controllers/usersControllers';

const router = Router();

router.get('/', getAllUsers);
router.post('/signup', signupValidation, createUser);
router.post('/login', logUserIn);

export { router as usersRoutes };
