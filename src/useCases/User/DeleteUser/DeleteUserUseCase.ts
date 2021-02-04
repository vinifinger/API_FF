import { Token } from "../../../entities/Token";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IDeleteUserRequestDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
    constructor(
        private userRepository: IUserRepository 
    ){}
    
    async execute(data: IDeleteUserRequestDTO) {
        const user = new User([data]);
        
        await this.userRepository.deleteUser(user);

        return;
    }
}