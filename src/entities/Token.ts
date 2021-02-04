import { User } from './User';

export class Token implements User {
    
    public readonly token?: string;
    public readonly email?: string;
    public readonly name?: string;
    public readonly password?: string;

    constructor(props: Token) {
        Object.assign(this, props);
    }
}