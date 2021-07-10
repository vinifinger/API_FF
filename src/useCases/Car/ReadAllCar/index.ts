import { MysqlCarRepository } from "../../../repositories/implementations/MysqlCarRepository";
import { ReadAllCarController } from "./ReadAllCarController";
import { ReadAllCarUseCase } from "./ReadAllCarUseCase";

const  mysqlCarRepository = new MysqlCarRepository();

const readAllCarUseCase = new ReadAllCarUseCase(
    mysqlCarRepository
);

const readAllCarController = new ReadAllCarController(
    readAllCarUseCase
);

export { readAllCarUseCase, readAllCarController }