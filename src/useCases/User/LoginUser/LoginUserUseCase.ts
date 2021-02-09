import { enc, AES } from "crypto-ts";
import { Token } from "../../../entities/Token";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ILoginUserRequestDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
    constructor(
        private userRepository: IUserRepository 
    ){}
    
    async execute(data: ILoginUserRequestDTO) {
        const user = new User(data);
        
        const content = await this.userRepository.loginUser(user);
        const result = await this.userRepository.createToken(content);
        return new Token(result);
    }
}