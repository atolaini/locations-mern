import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  console.log('GET request to user route');
  res.send('GET request to user route');
});

export default router;
