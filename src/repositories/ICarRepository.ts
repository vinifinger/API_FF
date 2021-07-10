import { Car } from "../entities/Car";
import { CarMark } from "../entities/CarMark";

export interface ICarRepository {
    findCarByPlate(car_plate: string): Promise<Car>;

    createCar(car: Car): Promise<void | Error>;  
    
    readCar(): Promise<Car[]>;

    readCarByFilter(car: Car): Promise<Car[]>;

    readAllCar(): Promise<Car[]>;

    readCarMark(): Promise<CarMark[]>;

    updateCar(user: Car): Promise<void | Error>;

    deleteCar(user: Car): Promise<void | Error>;

    saleCar(user: Car): Promise<void | Error>;
}