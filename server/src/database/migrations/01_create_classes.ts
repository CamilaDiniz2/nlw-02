import Knex from 'knex';

// Alterações database
export async function up(knex: Knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    // criar relacionamento com o professor
    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// Voltar alterações
export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}
