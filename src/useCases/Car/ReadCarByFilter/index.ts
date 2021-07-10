import { MysqlCarRepository } from "../../../repositories/implementations/MysqlCarRepository";
import { ReadCarByFilterController } from "./ReadCarByFilterController";
import { ReadCarByFilterUseCase } from "./ReadCarByFilterUseCase";

const  mysqlCarRepository = new MysqlCarRepository();

const readCarByFilterUseCase = new ReadCarByFilterUseCase(
    mysqlCarRepository
);

const readCarByFilterController = new ReadCarByFilterController(
    readCarByFilterUseCase
);

export { readCarByFilterUseCase, readCarByFilterController }