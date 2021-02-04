import { Request, Response } from "express";
import { ReadUserUseCase } from "./ReadUserUseCase";

export class ReadUserController {
    constructor(
        private readUserUseCase: ReadUserUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {

       try {
            const result = await this.readUserUseCase.execute();

           return res.status(201).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}