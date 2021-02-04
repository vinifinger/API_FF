import { MysqlUserRepository } from "../../../repositories/implementations/MysqlUserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const  mysqlUserRepository = new MysqlUserRepository();

const deleteUserUseCase = new DeleteUserUseCase(
    mysqlUserRepository
);

const deleteUserController = new DeleteUserController(
    deleteUserUseCase
);

export { deleteUserUseCase, deleteUserController }