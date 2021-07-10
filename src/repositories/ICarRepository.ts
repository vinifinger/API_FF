import { Car } from "../entities/Car";

export interface ICarRepository {
    findCarByPlate(car_plate: string): Promise<Car>;

    createCar(car: Car): Promise<void | Error>;  
    
    readCar(): Promise<Car[]>;

    updateCar(user: Car): Promise<void | Error>;

    deleteCar(user: Car): Promise<void | Error>;
}