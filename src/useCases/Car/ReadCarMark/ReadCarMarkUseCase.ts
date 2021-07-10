import { ICarRepository } from "../../../repositories/ICarRepository";

export class ReadCarMarkUseCase {
    constructor(
        private carRepository: ICarRepository 
    ){}
    
    async execute() {
        const data = await this.carRepository.readCarMark();
        return data; 
    }
}