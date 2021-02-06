import { Router } from 'express';
import { createUserController } from './useCases/User/CreateUser';
import { deleteUserController } from './useCases/User/DeleteUser';
import { readUserController } from './useCases/User/ReadUser';
import { updateUserController } from './useCases/User/UpdateUser';

const routes = Router();

// routes.post('/v1/car', (request, response) => {
//     return createMovieController.handle(request, response);
// });

routes.get('/user', (request, response) => {
    return readUserController.handle(request, response);
});

routes.post('/user', (request, response) => {
    return createUserController.handle(request, response);
});

routes.delete('/user/:hash', (request, response) => {
    return deleteUserController.handle(request, response);
});

routes.patch('/user/:hash', (request, response) => {
    return updateUserController.handle(request, response);
});
export { routes };