import { Knex } from "knex";

export const up = async (knex: Knex) => {
  return await knex.schema.createTable('usuarios', (table) => {
    table.increments('id', { primaryKey: true });
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('name');

  });
};

export const down = async (knex: Knex) => {
  return await knex.schema.dropTable('usuarios');
};