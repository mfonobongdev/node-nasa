const launches = new Map<number, Launch>();

let latestFlightNumber = 100;

const launch: Launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer 1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['NASA', 'ZTM'],
  upcoming: true,
  success: true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  const allLaunches = launches.values();
  return Array.from(allLaunches);
}

function addNewLaunch(
  launch: Omit<Launch, 'flightNumber' | 'customer' | 'upcoming' | 'success'>
) {
  latestFlightNumber++;

  //add server genetared values
  const newLaunch = Object.assign(launch, {
    flightNumber: latestFlightNumber,
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true
  });

  launches.set(latestFlightNumber, newLaunch);
}

function launchWithIdExists(launchId: number) {
  return launches.has(launchId);
}

function abortLaunchById(launchId: number) {
  const aborted = launches.get(launchId);

  if (aborted) {
    aborted.upcoming = false;
    aborted.success = false;
  }

  return aborted;
}

export default {
  getAllLaunches,
  addNewLaunch,
  launchWithIdExists,
  abortLaunchById
};

/* types */
export type Launch = {
  flightNumber: number;
  mission: string;
  rocket: string;
  launchDate: Date;
  destination: string;
  customer: string[];
  upcoming: boolean;
  success: boolean;
};

export type InputLaunch = Omit<
  Launch,
  'flightNumber' | 'customer' | 'upcoming' | 'success'
>;
