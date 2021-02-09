import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { ICreateCarRequestDTO } from "./CreateCarDTO";

export class CreateCarUseCase {
    constructor(
        private carRepository: ICarRepository 
    ){}
    
    async execute(data: ICreateCarRequestDTO) {
        const car = new Car(data);
        console.log(car);
        
        const content = await this.carRepository.findCarByPlate(car.car_plate);

        if (content.car_plate) {
            throw new Error('Car plate already exists.');
        }

        await this.carRepository.createCar(car);
        return;
    }
}