import { Router } from 'express';
import { readUserController } from './useCases/User/ReadUser';

const routes = Router();

// routes.post('/v1/car', (request, response) => {
//     return createMovieController.handle(request, response);
// });

routes.get('/user/read', (request, response) => {
    return readUserController.handle(request, response);
});

export { routes };