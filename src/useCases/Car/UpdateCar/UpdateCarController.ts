import { Request, Response } from "express";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

export class UpdateCarController {
    constructor(
        private updateCarUseCase: UpdateCarUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const hash = req.params.hash.toString();
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
            const result = await this.updateCarUseCase.execute({
                hash,
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

           return res.status(200).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}