import { Token } from "../../../entities/Token";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IReadUserRequestDTO } from "./ReadUserDTO";

export class ReadUserUseCase {
    constructor(
        private userRepository: IUserRepository 
    ){}
    
    async execute() {

        const data = await this.userRepository.readUser();
        return data; 
    }
}