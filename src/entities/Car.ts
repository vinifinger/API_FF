import { v4 } from "uuid";
export class Car {
    public readonly id?: number;
    public hash?: string;
    public car_name?: string;
    public car_model?: string;
    public car_mark?: number;
    public car_plate?: string;
    public car_brake?: string;
    public car_engine?: number;
    public car_valve?: number;
    public car_door?: number;
    public car_tire?: number;
    public car_gearbox?: string;
    public car_weight?: number;
    public car_year?: number;
    public car_price?: number;
    public car_mileage?: number;
    public car_color?: string;
    public car_fuel?: string;

    constructor(props: Car, hash?: string) {
        Object.assign(this, props);

        if ( !hash && props ) {
            this.hash = v4();
        }
    }
}