import { Token } from "../../entities/Token";
import { IMiddlewareRepository } from "../../repositories/IMiddlewareRepository";
import { IMiddlewareDTO } from "./MiddlewareDTO";

export class MiddlewareUseCase {
    constructor(
        private middlewareRepository: IMiddlewareRepository
    ){}
    
    async execute(data: IMiddlewareDTO) {
        const token = new Token(data);
        
        return await this.middlewareRepository.verifyToken(token);
    }   
}