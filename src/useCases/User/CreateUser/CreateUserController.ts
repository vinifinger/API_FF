import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
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
            const result = await this.createUserUseCase.execute({
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

           return res.status(201).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}