import type { Launch } from "../models/launches/launch";
import { launchMapper } from "../models/launches/launch";
import { launchpadMapper, type Launchpad } from "../models/launches/launchpad";
import { rocketMapper, type Rocket } from "../models/vehicles/rocket";

const BASE_URL = "https://api.spacexdata.com/latest";

const defaultHeaders = {
  "Content-Type": "application/json",
};

export const fetchNextLaunch = async () => {
  try {
    const response = await fetch(`${BASE_URL}/launches/upcoming`);
    if (!response.ok) {
      throw new Error("Problem fetching next launch");
    }
    const data = await response.json();
    return data.date_utc;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchLaunchByID = async (launchID: string): Promise<Launch> => {
  try {
    const response = await fetch(`${BASE_URL}/launches/${launchID}`);
    if (!response.ok) {
      throw new Error("Problem fetching launch by ID");
    }
    const data = await response.json();
    await fetchLaunchpadByID(data.launchpad);
    return launchMapper(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchLaunchpadByID = async (
  launchpadID: string
): Promise<Launchpad> => {
  try {
    const response = await fetch(
      `https://api.spacexdata.com/v4/launchpads/${launchpadID}`
    );
    if (!response.ok) {
      throw new Error("Problem fetching launchpad by ID");
    }
    const data = await response.json();
    return launchpadMapper(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchLaunchpads = async (): Promise<Launchpad[]> => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v4/launchpads`);
    if (!response.ok) {
      throw new Error("Problem fetching launchpads");
    }
    const data = await response.json();
    return data.map((launchpadData: any) => launchpadMapper(launchpadData));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchRocketByID = async (rocketID: string): Promise<Rocket> => {
  try {
    const response = await fetch(
      `https://api.spacexdata.com/v4/rockets/${rocketID}`
    );
    if (!response.ok) {
      throw new Error("Problem fetching rocket by ID");
    }
    const data = await response.json();
    return rocketMapper(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchRockets = async (): Promise<Rocket[]> => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v4/rockets`);
    if (!response.ok) {
      throw new Error("Problem fetching rockets");
    }
    const data = await response.json();

    return data.map((rocketData: any) => rocketMapper(rocketData));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchShips = async (): Promise<Rocket[]> => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v4/ships`);
    if (!response.ok) {
      throw new Error("Problem fetching rockets");
    }
    const data = await response.json();

    return [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchLaunches = async (): Promise<Launch[]> => {
  try {
    const query = {
      query: {},
      options: {
        limit: 40,
      },
    };

    const response = await fetch(`${BASE_URL}/launches/query`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(query),
    });

    if (!response.ok) {
      throw new Error("Problem fetching launches");
    }
    const data = await response.json();
    return data.docs.map((launch: any) => launchMapper(launch));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
