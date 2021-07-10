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
import { readCarMarkController } from './useCases/Car/ReadCarMark';
import { saleCarController } from './useCases/Car/SaleCar';
import { readAllCarController } from './useCases/Car/ReadAllCar';
import { readCarByFilterController } from './useCases/Car/ReadCarByFilter';

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

routes.patch('/v1/user/:hash', (request, response) => {
    return updateUserController.handle(request, response);
});

routes.delete('/v1/user/:hash', (request, response) => {
    return deleteUserController.handle(request, response);
});

routes.post('/user/login', (request, response) => {
    return loginUserController.handle(request, response);
});


// Car ----------
routes.post('/v1/car', (request, response) => {
    return createCarController.handle(request, response);
});

routes.get('/v1/car', (request, response) => {
    return readCarController.handle(request, response);
});

routes.get('/v1/car/filter/', (request, response) => {
    return readCarByFilterController.handle(request, response);
});

routes.get('/v1/car/all', (request, response) => {
    return readAllCarController.handle(request, response);
});

routes.get('/v1/car/mark', (request, response) => {
    return readCarMarkController.handle(request, response);
});


routes.patch('/v1/car/:hash', (request, response) => {
    return updateCarController.handle(request, response);
});

routes.delete('/v1/car/:hash', (request, response) => {
    return deleteCarController.handle(request, response);
});

routes.patch('/v1/car/sale/:hash', (request, response) => {
    return saleCarController.handle(request, response);
});

export { routes };