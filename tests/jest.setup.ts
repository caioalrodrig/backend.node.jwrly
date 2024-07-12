import supertest from 'supertest';
import {server} from '../src/Server'
import { Knex } from '../src/database/knex';

beforeAll(async () =>{
  await Knex.migrate.latest();
  await Knex.seed.run();
});

afterAll(async () =>{
  await Knex.destroy();
});

export const testserver = supertest(server);

