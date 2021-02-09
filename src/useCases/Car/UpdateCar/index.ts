import { MysqlCarRepository } from "../../../repositories/implementations/MysqlCarRepository";
import { UpdateCarController } from "./UpdateCarController";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

const  mysqlCarRepository = new MysqlCarRepository();

const updateCarUseCase = new UpdateCarUseCase(
    mysqlCarRepository
);

const updateCarController = new UpdateCarController(
    updateCarUseCase
);

export { updateCarUseCase, updateCarController }