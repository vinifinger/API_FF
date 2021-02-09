import { db } from "../../database/connection";
import { Car } from "../../entities/Car";
import { ICarRepository } from "../ICarRepository";
import * as dotenv from 'dotenv';
dotenv.config();

export class MysqlCarRepository implements ICarRepository {
    async findCarByPlate(email: string): Promise<Car> {
        try {
            const result = await db('car').where('car_plate', email);

            return new Car(result[0]);
        } catch (err) {
            throw new Error(err);
        }
    }

    async createCar(car: Car): Promise<void | Error> {
    
        const {
            hash,
            car_name,
            car_model,
            car_mark,
            car_plate,
            car_brake,
            car_engine,
            car_valve,
            car_door,
            car_tire,
            car_gearbox,
            car_weight,
            car_year,
            car_price,
            car_mileage,
            car_color,
            car_fuel
        } = car;
    
        const trx = await db.transaction();

        try {
            
            await trx('car').insert({
                hash,
                car_name,
                car_model,
                car_mark,
                car_plate,
                car_status: 1,
                car_brake,
                car_engine,
                car_valve,
                car_door,
                car_tire,
                car_gearbox,
                car_weight,
                car_year,
                car_price,
                car_mileage,
                car_color,
                car_fuel
            });

            trx.commit();

            return;
        } catch (err) {
            throw new Error(err);
        }
    };

    async readCar(): Promise<Car> {

        try {
            const data = await db('car').where('car_status', 1);
            return new Car(data);

        } catch (err) {
            throw new Error(err);
        }
    };

    async updateCar(car: Car): Promise<void | Error> {

        const {
            hash,
            car_name,
            car_model,
            car_mark,
            car_plate,
            car_brake,
            car_engine,
            car_valve,
            car_door,
            car_tire,
            car_gearbox,
            car_weight,
            car_year,
            car_price,
            car_mileage,
            car_color,
            car_fuel
        } = car;

        try {
            
            const trx = await db.transaction();

            await trx('car').update({
                car_name,
                car_model,
                car_mark,
                car_plate,
                car_brake,
                car_engine,
                car_valve,
                car_door,
                car_tire,
                car_gearbox,
                car_weight,
                car_year,
                car_price,
                car_mileage,
                car_color,
                car_fuel
            }).where('hash', hash);

            trx.commit();

            return;
        } catch (err) {
            throw new Error(err);
        }
    };

    async deleteCar(car: Car): Promise<void | Error> {
        
        const { hash } = car;
        
        const trx = await db.transaction();

        try {
            await trx('car').update({
                car_status: 0
            }).where('hash', hash);

            trx.commit();

            return;
        } catch (err) {
            throw new Error(err);
        }
    };
}