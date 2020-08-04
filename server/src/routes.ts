import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsControllers';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

// Gravar dados
routes.post('/classes', classesControllers.create);

// Lista classes
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);
export default routes;
