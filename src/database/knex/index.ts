import { knex } from 'knex';

import { development, production, test } from './Environment';


const getEnvironment = () => {
  const env = process.env.NODE_ENV;
  
  if (env === 'development') return development;
  if (env === 'test') return test;
  if (env === 'production') return production;
  return development;
};

export const Knex = knex(getEnvironment());