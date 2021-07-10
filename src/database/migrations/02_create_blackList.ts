import * as knex from 'knex';

export async function up(knex: knex) {
    await knex.schema.createTable('blackList', table => {
        table.increments('id').primary();
        table.string('hash');
        table.dateTime('date_insert').defaultTo(knex.fn.now());
    });

    return;
}

export async function down(knex: knex) {
    return knex.schema.dropTable('blackList');
}