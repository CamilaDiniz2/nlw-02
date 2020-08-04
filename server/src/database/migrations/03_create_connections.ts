import Knex from 'knex';

// Alterações database
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', (table) => {
    table.increments('id').primary();

    // criar relacionamento com o professor
    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table
      .timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  });
}

// Voltar alterações
export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}
