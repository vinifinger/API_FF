export class Car {
    public readonly id?: number;

    public name?: string;    
    public model?: string;

    constructor(props: Car) {
        Object.assign(this, props);

    }
}