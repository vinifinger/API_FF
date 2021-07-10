import * as knex from 'knex';

export async function up(knex: knex) {
    await knex.schema.createTable('car_mark', table => {
        table.increments('id').primary();
        table.string('car_mark');
    });
    
    await knex('car_mark').insert([
        { car_mark: "Aston Martin" },
        { car_mark: "Audi" }, 
        { car_mark: "Bentley" },
        { car_mark: "BMW" },
        { car_mark: "Caoa Chery" }, 
        { car_mark: "Chevrolet" },
        { car_mark: "Chrysler" },
        { car_mark: "Citroen" }, 
        { car_mark: "Dodge" },
        { car_mark: "Ferrari" },
        { car_mark: "Fiat" }, 
        { car_mark: "Ford" },
        { car_mark: "Honda" },
        { car_mark: "Husqvarna" }, 
        { car_mark: "Hyundai" },
        { car_mark: "JAC" },
        { car_mark: "Jaguar" }, 
        { car_mark: "Jeep" },
        { car_mark: "KIA" },
        { car_mark: "Land Rover" },
        { car_mark: "Lexus" }, 
        { car_mark: "Lifan" },
        { car_mark: "Maserati" },
        { car_mark: "Mercedes-Benz" },
        { car_mark: "Mini" }, 
        { car_mark: "Mitsubishi" },
        { car_mark: "Nissan" },
        { car_mark: "Peugeot" },
        { car_mark: "Porsche" }, 
        { car_mark: "Renault" },
        { car_mark: "Subaru" },
        { car_mark: "Suzuki" },
        { car_mark: "Toyota" }, 
        { car_mark: "Volkswagen" },
        { car_mark: "Volvo" },
        { car_mark: "Yamaha" }
    ]);

    return;
}

export async function down(knex: knex) {
    return knex.schema.dropTable('car_mark');
}