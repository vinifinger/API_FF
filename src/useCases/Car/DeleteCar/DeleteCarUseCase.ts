import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { IDeleteCarRequestDTO } from "./DeleteCarDTO";

export class DeleteCarUseCase {
    constructor(
        private carRepository: ICarRepository 
    ){}
    
    async execute(data: IDeleteCarRequestDTO) {
        const car = new Car(data, data.hash);
        
        await this.carRepository.deleteCar(car);

        return;
    }
}