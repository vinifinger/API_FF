import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";

export class CreateCarController {
    constructor(
        private createCarUseCase: CreateCarUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const { 
            car_name,
            car_model,
            car_mark,
            car_plate,
            car_brake,
            car_engine,
            car_valve,
            car_door,
            car_tire,
            car_gearbox,
            car_weight,
            car_year,
            car_price,
            car_mileage,
            car_color,
            car_fuel
        } = req.body;

       try {
            const result = await this.createCarUseCase.execute({
                car_name,
                car_model,
                car_mark,
                car_plate,
                car_brake,
                car_engine,
                car_valve,
                car_door,
                car_tire,
                car_gearbox,
                car_weight,
                car_year,
                car_price,
                car_mileage,
                car_color,
                car_fuel
           });

           return res.status(201).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}