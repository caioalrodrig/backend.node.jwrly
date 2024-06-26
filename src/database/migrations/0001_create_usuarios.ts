import { Knex } from "knex";

export const up = async (knex: Knex) => {
  return await knex.schema.createTable('usuarios', (table) => {
    table.increments('id', { primaryKey: true });
    table.string('email').notNullable().unique();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('likes');

    table.foreign('likes')
    .references('id')
    .inTable('relogios')
    .onDelete('CASCADE');

  });
};

export const down = async (knex: Knex) => {
  return await knex.schema.dropTable('usuarios');
};