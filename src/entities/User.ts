export class User {
    public readonly id?: number;
    public token?: string;
    public email?: string;
    public name?: string;
    public password?: string;

    constructor(props: User[]) {
        Object.assign(this, props);

    }
}