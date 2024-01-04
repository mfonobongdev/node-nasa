import { parse } from 'csv-parse';
import * as fs from 'fs';
import * as path from 'path';

const habitablePlanets: Planet[] = [];

function getAllPlanets() {
  return habitablePlanets;
}

export default {
  loadPlanetsData,
  getAllPlanets
};

/* functions */
function isHabitablePlanet(planet: Planet) {
  const isNotTooCold = Number(planet.koi_insol) > 0.36;
  const isNotTooHot = Number(planet.koi_insol) < 1.11;
  const isNotTooBig = Number(planet.koi_prad) < 1.6;
  const isConfirmed = planet.koi_disposition === 'CONFIRMED';

  return isNotTooCold && isNotTooHot && isNotTooBig && isConfirmed;
}

function loadPlanetsData() {
  const pathToFile = path.join(process.cwd(), 'src', 'data', 'kepler_data.csv');

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathToFile)
      .pipe(parse({ comment: '#', columns: true }))
      .on('data', (data: Planet) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on('error', (err) => {
        console.log('err', err);
        reject(err);
      })
      .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found`);
        resolve('done');
      });
  });
}

/* types */
type Planet = {
  kepler_name: string;
  koi_prad: string;
  koi_insol: string;
  koi_disposition: 'CONFIRMED' | 'CANDITADE' | 'FALSE POSITIVE';
};
