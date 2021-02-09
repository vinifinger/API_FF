import { MysqlCarRepository } from "../../../repositories/implementations/MysqlCarRepository";
import { DeleteCarController } from "./DeleteCarController";
import { DeleteCarUseCase } from "./DeleteCarUseCase";

const  mysqlCarRepository = new MysqlCarRepository();

const deleteCarUseCase = new DeleteCarUseCase(
    mysqlCarRepository
);

const deleteCarController = new DeleteCarController(
    deleteCarUseCase
);

export { deleteCarUseCase, deleteCarController }