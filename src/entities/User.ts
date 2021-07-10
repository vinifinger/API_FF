import { uuid } from "uuidv4";

export class User {
    public readonly id?: number;
    public hash?: string;
    public name?: string;
    public surname?: string;
    public email?: string;
    public cpf?: string;
    public rg?: string;
    public status?: Number;
    public username?: string;
    public password?: string;
    public telephone?: string;
    public sex?: string;
    public marital_status?: string;
    public end_state?: string;
    public end_city?: string;
    public end_number?: string;
    public end_district?: string;
    public end_cep?: string;

    constructor(props: User | User[], hash?: string | string[]) {
        Object.assign(this, props);
        console.log(this.hash);
        if ( !hash && props ) {
            this.hash = uuid();
        }
    }
}