import * as knex from 'knex';

export async function up(knex: knex) {
    await knex.schema.createTable('car_status', table => {
        table.increments('id').primary();
        table.string('car_status');
    });

    await knex('car_status').insert([
        { car_status: "Ativo" },
        { car_status: "Vendido" }, 
        { car_status: "Desativado" }
    ]);

    return;
}

export async function down(knex: knex) {
    return knex.schema.dropTable('car_status');
}