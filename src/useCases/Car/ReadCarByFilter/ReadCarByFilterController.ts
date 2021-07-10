import { Request, Response } from "express";
import { ReadCarByFilterUseCase } from "./ReadCarByFilterUseCase";

export class ReadCarByFilterController {
    constructor(
        private readCarByFilterUseCase: ReadCarByFilterUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        var car_name = req.query.car_name ? req.query.car_name.toString() : null;
        var car_mark = req.query.car_mark ? parseInt(req.query.car_mark.toString()) : null;
        var car_model = req.query.car_model ? req.query.car_model.toString() : null;
        var car_year = req.query.car_year ? parseInt(req.query.car_year.toString()) : null;

       try {
            const result = await this.readCarByFilterUseCase.execute({ 
                car_name, 
                car_mark,
                car_model,
                car_year 
            });

           return res.status(200).json({ result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}