import { Knex } from 'knex';
import { dataset } from '../.';

export const seed = async (knex: Knex) => {
  const BATCH_SIZE = 5;
  const [{ count }] = await knex('relogios')
    .count<[{ count: number }]>('* as count');

  if (!Number.isInteger(count) || Number(count) > 0) return;

  for (let i = 0; i < dataset.length; i += BATCH_SIZE) {
    const batch = dataset.slice(i, i + BATCH_SIZE);
    await knex('relogios').insert(batch); 
 }
};