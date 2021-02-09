import { Request, Response } from "express";
import { DeleteCarUseCase } from "./DeleteCarUseCase";

export class DeleteCarController {
    constructor(
        private deleteCarUseCase: DeleteCarUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const hash = req.params.hash.toString();

       try {
            const result = await this.deleteCarUseCase.execute({
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