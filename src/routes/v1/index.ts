import { Router } from 'express';

import HomeRouter from './home';

const router = Router();

router.use('/', HomeRouter);

export default router;