import { MysqlCarRepository } from "../../../repositories/implementations/MysqlCarRepository";
import { CreateCarController } from "./CreateCarController";
import { CreateCarUseCase } from "./CreateCarUseCase";

const  mysqlCarRepository = new MysqlCarRepository();

const createCarUseCase = new CreateCarUseCase(
    mysqlCarRepository
);

const createCarController = new CreateCarController(
    createCarUseCase
);

export { createCarUseCase, createCarController }