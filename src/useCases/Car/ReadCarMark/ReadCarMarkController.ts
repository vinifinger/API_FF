import { Request, Response } from "express";
import { ReadCarMarkUseCase } from "./ReadCarMarkUseCase";

export class ReadCarMarkController {
    constructor(
        private readCarMarkUseCase: ReadCarMarkUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {

       try {
            const result = await this.readCarMarkUseCase.execute();

           return res.status(200).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}