import { MysqlUserRepository } from "../../../repositories/implementations/MysqlUserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const  mysqlUserRepository = new MysqlUserRepository();

const updateUserUseCase = new UpdateUserUseCase(
    mysqlUserRepository
);

const updateUserController = new UpdateUserController(
    updateUserUseCase
);

export { updateUserUseCase, updateUserController }