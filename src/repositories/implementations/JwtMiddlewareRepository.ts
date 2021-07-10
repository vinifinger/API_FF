import { Token } from '../../entities/Token';
import jwt from 'jsonwebtoken';
import { IMiddlewareRepository } from '../IMiddlewareRepository';
import { db } from '../../database/connection';
import * as dotenv from 'dotenv';
dotenv.config();
export class JwtMiddlewareRepository implements IMiddlewareRepository {
    async verifyToken(token: Token): Promise<Number> {
        
        const data = token.token;

        if (data === 'undefined')
            return 0; // No token provided

            
        return jwt.verify(data, process.env.SECRET_STRING, async (err, decoded) => {
            if (err) 
                return 1; // Token invalid
                
            decoded.user.token = data;
            const token = new Token(decoded.user);

            try {    
                
                const content = await db('user')
                .where('email', token.email)
                .andWhere('password', token.password)
                .limit(1);

                if (content.length) {
                    const response = await db('blackList')
                    .where('hash', token.token);

                    if (response.length)
                        return 4;
                    
                    return 2;
                }

                return 3;
            } catch (err) {
                return err;
            }           
        });
    }
}