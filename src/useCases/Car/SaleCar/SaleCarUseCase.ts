import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { ISaleCarRequestDTO } from "./SaleCarDTO";

export class SaleCarUseCase {
    constructor(
        private carRepository: ICarRepository 
    ){}
    
    async execute(data: ISaleCarRequestDTO) {
        const car = new Car(data, data.hash);
        
        await this.carRepository.saleCar(car);

        return;
    }
}