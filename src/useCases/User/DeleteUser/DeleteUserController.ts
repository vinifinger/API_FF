import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    constructor(
        private deleteUserUseCase: DeleteUserUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const id = parseInt(req.params.id);

       try {
            const result = await this.deleteUserUseCase.execute({
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