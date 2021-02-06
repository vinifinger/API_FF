import * as knex from 'knex';
import { uuid } from "uuidv4";

export async function up(knex: knex) {
    await knex.schema.createTable('user', table => {
        table.increments('id').primary();
        table.uuid('hash');
        table.string('name');
        table.string('surname');
        table.string('email');
        table.string('cpf');
        table.string('rg');
        table.integer('status');
        table.string('username');
        table.string('password');
        table.string('telephone');
        table.string('sex');
        table.string('marital_status');
        table.string('end_state');
        table.string('end_city');
        table.string('end_number');
        table.string('end_district');
        table.string('end_cep');
    });

    await knex('user').insert({
        name: 'nome',
        hash: uuid(),
        surname: 'sobrenome',
        email: 'root@root.com',
        cpf: '1234567890',
        rg: '1234567890',
        status: 1,
        username: 'Usuario',
        password: 'Senha',
        telephone: '(51) 99999-9999',
        sex: 'M',
        marital_status: 'Estado Civil',
        end_state: 'Endereço Estado',
        end_city: 'Endereço Cidade',
        end_number: 'Endereço Número',
        end_district: 'Endereço Bairro',
        end_cep: 'Endereço CEP'
    });

    return;
}

export async function down(knex: knex) {
    return knex.schema.dropTable('user');
}