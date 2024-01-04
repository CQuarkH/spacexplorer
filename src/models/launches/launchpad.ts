import { calculateSuccessRatio } from "../../common/utils";

export type Launchpad = {
  launchpadID: string;
  name: string;
  fullName: string;
  launchAttempts: number;
  launchSuccesses: number;
  successRatio: number;
  launches: string[];
  imageUrl: string;
  location: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  status: string;
  details: string;
  timezone: string;
};

export const launchpadMapper = (launchpad: any): Launchpad => {
  return {
    launchpadID: launchpad.id,
    name: launchpad.name,
    fullName: launchpad.full_name,
    launchAttempts: launchpad.launch_attempts,
    launchSuccesses: launchpad.launch_successes,
    launches: launchpad.launches,
    successRatio: calculateSuccessRatio(
      launchpad.launch_attempts,
      launchpad.launch_successes
    ),
    imageUrl: launchpad.images.large,
    location: `${launchpad.locality}, ${launchpad.region}`,
    coordinates: {
      latitude: launchpad.latitude,
      longitude: launchpad.longitude,
    },
    status: launchpad.status,
    details: launchpad.details,
    timezone: launchpad.timezone,
  };
};
