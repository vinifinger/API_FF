import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const hash = req.params.hash.toString();
       const {
            name,
            surname,
            email,
            cpf,
            rg,
            username,
            password,
            telephone,
            sex,
            marital_status,
            end_state,
            end_city,
            end_number,
            end_district,
            end_cep
        } = req.body;

       try {
            const result = await this.updateUserUseCase.execute({
                hash,
                name,
                surname,
                email,
                cpf,
                rg,
                username,
                password,
                telephone,
                sex,
                marital_status,
                end_state,
                end_city,
                end_number,
                end_district,
                end_cep
           });

           return res.status(200).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}