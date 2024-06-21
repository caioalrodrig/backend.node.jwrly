import express from 'express'; 
import { Router } from 'express';
import {router} from './routes'

const server = express();

server.use(express.json());

server.use(router as Router);

export { server }