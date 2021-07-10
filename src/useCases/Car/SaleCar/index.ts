import { MysqlCarRepository } from "../../../repositories/implementations/MysqlCarRepository";
import { SaleCarController } from "./SaleCarController";
import { SaleCarUseCase } from "./SaleCarUseCase";

const  mysqlCarRepository = new MysqlCarRepository();

const saleCarUseCase = new SaleCarUseCase(
    mysqlCarRepository
);

const saleCarController = new SaleCarController(
    saleCarUseCase
);

export { saleCarUseCase, saleCarController }