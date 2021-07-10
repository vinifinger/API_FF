import { Request, Response } from "express";
import { SaleCarUseCase } from "./SaleCarUseCase";

export class SaleCarController {
    constructor(
        private saleCarUseCase: SaleCarUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const hash = req.params.hash.toString();
        console.log(hash);
       try {
            const result = await this.saleCarUseCase.execute({
                hash
           });

           return res.status(201).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}