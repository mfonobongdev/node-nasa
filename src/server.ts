import http from 'http';
import app from './app';

import planetsModel from '@models/planets.model';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

planetsModel.loadPlanetsData().then();

server.listen(PORT, () => {
  console.log(`Listening in port ${PORT}...`);
});
