import { Knex } from "knex";

export const up = async (knex: Knex) => {
  // if (true) return;
  return await knex.schema.alterTable('relogios', (table) => {
    table.string('title');  
  });
};

export const down = async (knex: Knex) => {
  // if (true) return;
  return await knex.schema.alterTable('relogios', (table) => {
    table.dropColumn('title');
  });
};