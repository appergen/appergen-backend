import type { Application } from 'express';

import V1Router from './routes/v1/home';

export function createRoutes(app: Application) {
  app.use('/v1', V1Router);
}