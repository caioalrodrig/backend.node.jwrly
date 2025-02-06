import { Knex } from "knex";

export const up = async (knex: Knex) => {
  return await knex.schema.createTable('pessoa', (table) => {
    table.integer('user_id').notNullable();
    table.integer('relogio_id').notNullable();

    table.foreign('user_id').references('usuarios.id')
    .onDelete('CASCADE');
    table.foreign('relogio_id').references('relogios.id')
    .onDelete('CASCADE');
    table.primary(['user_id', 'relogio_id']);
  });
};

export const down = async (knex: Knex) => {
  return await knex.schema.dropTable('pessoa');
};