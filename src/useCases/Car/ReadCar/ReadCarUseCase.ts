import { ICarRepository } from "../../../repositories/ICarRepository";

export class ReadCarUseCase {
    constructor(
        private carRepository: ICarRepository 
    ){}
    
    async execute() {
        const data = await this.carRepository.readCar();
        return data; 
    }
}