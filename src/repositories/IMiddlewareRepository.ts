import { Token } from "../entities/Token";

export interface IMiddlewareRepository {
    verifyToken(token: Token): Promise<Number>;
}