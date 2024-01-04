import { type Request, type Response } from 'express';
import { z } from 'zod';
import launchesModel from '@models/launches.model';

function httpGetAllLaunches(_req: Request, res: Response) {
  return res.status(200).json(launchesModel.getAllLaunches());
}

function httpAddNewLaunch(req: Request, res: Response) {
  let launch: z.infer<typeof DtoHttpAddNewLaunch>;

  //validate request body
  try {
    launch = DtoHttpAddNewLaunch.parse(req.body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: error.issues.flatMap((el) => `${el.path} - ${el.message}`)
      });
    } else {
      return res.status(400).json({ error: 'An unexpected error occurred' });
    }
  }

  launchesModel.addNewLaunch(launch);

  return res.status(201).json(launch);
}

function httpAbortLaunch(req: Request, res: Response) {
  const launchId = Number(req.params.id);

  if (!launchesModel.launchWithIdExists(launchId)) {
    return res.status(404).json({ error: 'Launch not found' });
  }

  const aborted = launchesModel.abortLaunchById(launchId);

  return res.status(200).json(aborted);
}

export default {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
};

/* types */
const DtoHttpAddNewLaunch = z.object({
  mission: z.string().min(1),
  rocket: z.string().min(1),
  destination: z.string().min(1),
  launchDate: z.coerce.date()
});
