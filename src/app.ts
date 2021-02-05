import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { middlewareController } from './useCases/Middleware';
import { readUserController } from './useCases/User/ReadUser';

const app = express();

app.use(cors());
app.use(express.json());

// Middleware
app.use('/v1', (request, response, next) => {
    return middlewareController.handle(request, response, next);
});

app.use(routes);

export { app }