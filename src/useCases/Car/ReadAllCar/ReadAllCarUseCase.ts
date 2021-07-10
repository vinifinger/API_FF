import { ICarRepository } from "../../../repositories/ICarRepository";

export class ReadAllCarUseCase {
    constructor(
        private carRepository: ICarRepository 
    ){}
    
    async execute() {
        const data = await this.carRepository.readAllCar();
        return data; 
    }
}