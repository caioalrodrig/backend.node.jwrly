import { Knex } from "knex";

export const up = async (knex: Knex) => {
  return await knex.schema.alterTable('relogios', (table) => {
    table.string('title');  
  });
};

export const down = async (knex: Knex) => {
  return await knex.schema.alterTable('relogios', (table) => {
    table.dropColumn('title');
  });
};