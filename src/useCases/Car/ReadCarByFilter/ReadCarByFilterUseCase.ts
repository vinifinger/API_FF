import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { IReadCarByFilterRequestDTO } from "./ReadCarByFilterDTO";

export class ReadCarByFilterUseCase {
    constructor(
        private carRepository: ICarRepository 
    ){}
    
    async execute(data: IReadCarByFilterRequestDTO) {
        const car = new Car(data);

        return await this.carRepository.readCarByFilter(car);
    }
}