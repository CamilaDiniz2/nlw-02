import Knex from 'knex';

// Alterações database
export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', (table) => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    // criar relacionamento com o professor
    table
      .integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// Voltar alterações
export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}
