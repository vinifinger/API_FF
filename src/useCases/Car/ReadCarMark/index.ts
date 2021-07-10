import { MysqlCarRepository } from "../../../repositories/implementations/MysqlCarRepository";
import { ReadCarMarkController } from "./ReadCarMarkController";
import { ReadCarMarkUseCase } from "./ReadCarMarkUseCase";

const  mysqlCarRepository = new MysqlCarRepository();

const readCarMarkUseCase = new ReadCarMarkUseCase(
    mysqlCarRepository
);

const readCarMarkController = new ReadCarMarkController(
    readCarMarkUseCase
);

export { readCarMarkUseCase, readCarMarkController }