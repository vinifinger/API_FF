import { db } from "../../database/connection";
import { Car } from "../../entities/Car";
import { ICarRepository } from "../ICarRepository";
import * as dotenv from 'dotenv';
import { CarMark } from "../../entities/CarMark";
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

    async readCar(): Promise<Car[]> {

        try {
            const data = await db('car').where('car_status', 1);
            const cars:Car[] = [];
            data.forEach((i) => {
                cars.push(new Car(i, i.hash));
            });

            return cars;
        } catch (err) {
            throw new Error(err);
        }
    };

    async readCarByFilter(car: Car): Promise<Car[]> {

        const { 
            car_name, 
            car_mark,
            car_model,
            car_year    
        } = car;

        try {
            car 

            const data = await db('car')
            .where('car_status', 1)
            .whereRaw(`${car_name ? `car_name like '%${car_name}%'` : '' }`)
            .whereRaw(`${car_mark ? `car_mark = ${car_mark}` : '' }`)
            .whereRaw(`${car_model ? `car_model like '%${car_model}%'` : '' }`)
            .whereRaw(`${car_year ? `car_year = ${car_year}` : '' }`);

            const cars:Car[] = [];
            data.forEach((i) => {
                cars.push(new Car(i, i.hash));
            });
            return cars;
        } catch (err) {
            throw new Error(err);
        }
    };

    async readAllCar(): Promise<Car[]> {

        try {
            const data = await db('car');
            const cars:Car[] = [];
            data.forEach((i) => {
                cars.push(new Car(i, i.hash));
            });

            return cars;
        } catch (err) {
            throw new Error(err);
        }
    };

    async readCarMark(): Promise<CarMark[]> {
        
        try {
            const data = await db('car_mark');
            const car_marks:CarMark[] = [];
            data.forEach((i) => {
                car_marks.push(new CarMark(i));
            });

            return car_marks;
        } catch (err) {
            throw new Error(err);
        }
    }

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
                car_status: 3
            }).where('hash', hash);

            trx.commit();

            return;
        } catch (err) {
            throw new Error(err);
        }
    };

    async saleCar(car: Car): Promise<void | Error> {
        
        const { hash } = car;
        
        const trx = await db.transaction();

        try {
            await trx('car').update({
                car_status: 2
            }).where('hash', hash);

            trx.commit();

            return;
        } catch (err) {
            throw new Error(err);
        }
    };
}