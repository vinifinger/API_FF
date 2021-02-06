import { Token } from "../../../entities/Token";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUpdateUserRequestDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
    constructor(
        private userRepository: IUserRepository 
    ){}
    
    async execute(data: IUpdateUserRequestDTO) {
        const user = new User(data, data.hash);
        
        return await this.userRepository.updateUser(user);
    }
}