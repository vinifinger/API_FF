import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const id = parseInt(req.params.id);

       try {
            const result = await this.updateUserUseCase.execute({
                id
           });

           return res.status(201).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}