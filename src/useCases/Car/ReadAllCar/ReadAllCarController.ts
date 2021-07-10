import { Request, Response } from "express";
import { ReadAllCarUseCase } from "./ReadAllCarUseCase";

export class ReadAllCarController {
    constructor(
        private readAllCarUseCase: ReadAllCarUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {

       try {
            const result = await this.readAllCarUseCase.execute();

           return res.status(200).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}