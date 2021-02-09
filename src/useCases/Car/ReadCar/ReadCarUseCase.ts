import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { IReadCarRequestDTO } from "./ReadCarDTO";

export class ReadCarUseCase {
    constructor(
        private carRepository: ICarRepository 
    ){}
    
    async execute() {
        const data = await this.carRepository.readCar();
        console.log(data);
        return new Car(data, data.hash); 
    }
}