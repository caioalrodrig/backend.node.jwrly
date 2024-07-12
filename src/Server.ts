import express from 'express'; 
import cors from 'cors';

import { Router } from 'express';
import { router } from './routes'

const server = express();

server.use(cors({ origin:
  process.env.ENABLED_CORS?.split(',') || []
}));

server.use(express.json());

server.use(router as Router);

export { server }