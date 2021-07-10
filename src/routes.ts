import { Router } from 'express';
import { createUserController } from './useCases/User/CreateUser';
import { readUserController } from './useCases/User/ReadUser';
import { updateUserController } from './useCases/User/UpdateUser';
import { deleteUserController } from './useCases/User/DeleteUser';
import { createCarController } from './useCases/Car/CreateCar';
import { readCarController } from './useCases/Car/ReadCar';
import { updateCarController } from './useCases/Car/UpdateCar';
import { deleteCarController } from './useCases/Car/DeleteCar';
import { loginUserController } from './useCases/User/LoginUser';

const routes = Router();

// routes.post('/v1/car', (request, response) => {
//     return createMovieController.handle(request, response);
// });

// User ----------
routes.get('/v1/user', (request, response) => {
    return readUserController.handle(request, response);
});

routes.post('/user', (request, response) => {
    return createUserController.handle(request, response);
});

routes.patch('v1/user/:hash', (request, response) => {
    return updateUserController.handle(request, response);
});

routes.delete('v1/user/:hash', (request, response) => {
    return deleteUserController.handle(request, response);
});

routes.post('/user/login', (request, response) => {
    return loginUserController.handle(request, response);
});


// Car ----------
routes.post('v1/car', (request, response) => {
    return createCarController.handle(request, response);
});

routes.get('/v1/car', (request, response) => {
    return readCarController.handle(request, response);
});

routes.patch('v1/car/:hash', (request, response) => {
    return updateCarController.handle(request, response);
});

routes.delete('v1/car/:hash', (request, response) => {
    return deleteCarController.handle(request, response);
});

export { routes };