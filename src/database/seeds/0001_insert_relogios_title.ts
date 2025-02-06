import { Knex } from 'knex';
import { dataset } from '../.';

export const seed = async (knex: Knex) => {
  const BATCH_SIZE = 5;
  const hasColumn = await knex.schema.hasColumn('relogios', 'title');

  if( hasColumn ) return;
  
  const [{ count }] = await knex('relogios')
    .whereNull('title')
    .count<{ count: number }[]>('* as count');

  if (count <= BATCH_SIZE) return;

  for (let i = 0; i < dataset.length; i += BATCH_SIZE) {
    const batch = dataset.slice(i, i + BATCH_SIZE);

    for (let j = 0; j < batch.length; j++) {
      const { brand, model, strapMaterial } = batch[j];
      await knex('relogios')
        .update({
          title: `${brand} ${model} ${strapMaterial}`
        })
        .where('id', i + j + 1);
    }
  }
};