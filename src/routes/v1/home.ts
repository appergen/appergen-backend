import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  try {
    res.status(200).json({ message: 'Hello, world!' });
  } catch (err) {
    console.error(err);
    next(err);
  }
})

export default router;