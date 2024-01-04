import express from 'express';
import planetsController from './planets.controller';

const planetsRouter = express.Router();

planetsRouter.get('/', planetsController.httpGetAllPlanets);

export default planetsRouter;
