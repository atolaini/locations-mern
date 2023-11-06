import { Router } from 'express';
import {
  signupValidation,
  signInValidation,
} from '../validation/users-validation';
import {
  getAllUsers,
  createUser,
  logUserIn,
} from '../controllers/usersControllers';

const router = Router();

router.get('/', getAllUsers);
router.post('/signup', signupValidation, createUser);
router.post('/login', signInValidation, logUserIn);

export { router as usersRoutes };
