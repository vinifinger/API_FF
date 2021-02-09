import { Request, Response } from "express";
import { ReadCarUseCase } from "./ReadCarUseCase";

export class ReadCarController {
    constructor(
        private readCarUseCase: ReadCarUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {

       try {
            const result = await this.readCarUseCase.execute();

           return res.status(200).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}