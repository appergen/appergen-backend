import 'dotenv/config';
import './helpers/env';
import { env } from 'node:process';
import { createServer } from 'node:http';
import express from 'express';
import { createRoutes } from './routes';

const app = express();

createRoutes(app);

const server = createServer(app);

server.listen(env.PORT, () => {
  console.log('Server is running on http://localhost:%s', env.PORT);
});
