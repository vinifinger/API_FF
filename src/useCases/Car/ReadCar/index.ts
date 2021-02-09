import { MysqlCarRepository } from "../../../repositories/implementations/MysqlCarRepository";
import { ReadCarController } from "./ReadCarController";
import { ReadCarUseCase } from "./ReadCarUseCase";

const  mysqlCarRepository = new MysqlCarRepository();

const readCarUseCase = new ReadCarUseCase(
    mysqlCarRepository
);

const readCarController = new ReadCarController(
    readCarUseCase
);

export { readCarUseCase, readCarController }