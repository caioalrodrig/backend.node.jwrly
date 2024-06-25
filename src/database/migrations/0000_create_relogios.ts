import { Knex } from "knex";

export const up = async (knex: Knex) => {
  return await knex.schema.createTable('relogios', (table) => {
    table.increments('id',{ primaryKey: true });
    table.string('model').notNullable();
    table.string('brand').notNullable();
    table.integer('price');
    table.string('strapMaterial');
    table.string('caseMaterial'); 
  });
};

export const down = async (knex: Knex) => {
  return await knex.schema.dropTable('relogios');
};