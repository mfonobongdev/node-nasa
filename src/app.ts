import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import planetsRouter from '@routes/planets/planets.router';
import launchesRouter from '@routes/launches/launches.router';

const app = express();

/* middleware */
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);
app.use(morgan('combined'));
app.use(express.json());

/* routes */
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

export default app;
