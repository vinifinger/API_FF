import * as knex from 'knex';
import { v4 } from "uuid";

export async function up(knex: knex) {
    await knex.schema.createTable('car', table => {
        table.increments('id').primary();
        table.uuid('hash');
        table.string('car_name');
        table.string('car_model');
        table.string('car_mark');
        table.string('car_plate');
        table.dateTime('date_insert').defaultTo(knex.fn.now());
        table.integer('car_status');
        table.string('car_brake');
        table.float('car_engine');
        table.integer('car_valve');
        table.integer('car_door');
        table.integer('car_tire');
        table.string('car_gearbox');
        table.integer('car_weight');
        table.string('car_year');
        table.float('car_price');
        table.float('car_mileage');
        table.string('car_color');
        table.string('car_fuel');
    });

    await knex('car').insert({
        hash: v4(),
        car_name: 'Fit',
        car_model: 'CVT',
        car_mark: 'Honda',
        car_plate: 'ABC-9090',
        car_status: 1,
        car_brake: 'ABS',
        car_engine: 1.6,
        car_valve: 16,
        car_door: 4,
        car_tire: 16,
        car_gearbox: 'Automático',
        car_weight: 980,
        car_year: '2015',
        car_price: 35990.90,
        car_mileage: 98835.9,
        car_color: 'Azul',
        car_fuel: 'Gasolina'
    });

    return;
}

export async function down(knex: knex) {
    return knex.schema.dropTable('car');
}