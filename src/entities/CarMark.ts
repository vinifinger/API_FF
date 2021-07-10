export class CarMark {
    public readonly id: number;
    public car_mark: string;

    constructor(props: CarMark) {
        Object.assign(this, props); 
    }
}