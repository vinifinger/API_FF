import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { IUpdateCarRequestDTO } from "./UpdateCarDTO";

export class UpdateCarUseCase {
    constructor(
        private carRepository: ICarRepository 
    ){}
    
    async execute(data: IUpdateCarRequestDTO) {
        const car = new Car(data, data.hash);
        
        return await this.carRepository.updateCar(car);
    }
}