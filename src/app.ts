import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { middlewareController } from './useCases/Middleware';
import { readUserController } from './useCases/User/ReadUser';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';

const app = express();

const swaggerFile = ('./src/swagger/swagger.json');
const swaggerData = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, null, null));

// Middleware
app.use('/v1', (request, response, next) => {
    return middlewareController.handle(request, response, next);
});

app.use(routes);

export { app }