import { type Request, type Response } from 'express';
import planetsModel from '@models/planets.model';

function httpGetAllPlanets(_req: Request, res: Response) {
  return res.status(200).json(planetsModel.getAllPlanets());
}

export default {
  httpGetAllPlanets
};
