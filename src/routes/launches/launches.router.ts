import express from 'express';
import launchesController from './launches.controller';

const launchesRouter = express.Router();

launchesRouter.get('/', launchesController.httpGetAllLaunches);
launchesRouter.post('/', launchesController.httpAddNewLaunch);
launchesRouter.delete('/:id', launchesController.httpAbortLaunch);

export default launchesRouter;
