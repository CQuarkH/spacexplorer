export type Rocket = {
  rocketID: string;
  name: string;
  type: string;
  description: string;
  active: boolean;
  costPerLaunch: number;
  successRatePercentage: number;
  firstFlight: string | Date;
  country: string;
  company: string;
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  stages: number;
  boosters: number;
  firstStage: {
    thrustSeaLevel: {
      kN: number;
      lbf: number;
    };
    thrustVacuum: {
      kN: number;
      lbf: number;
    };
    reusable: boolean;
    engines: number;
    fuelAmountTons: number;
    burnTimeSec: number;
  };
  secondStage: {
    thrust: {
      kN: number;
      lbf: number;
    };
    payloads: {
      compositeFairing: object;
      option1: string;
    };
    reusable: boolean;
    engines: number;
    fuelAmountTons: number;
    burnTimeSec: number;
  };
  engines: {
    isp: {
      seaLevel: number;
      vacuum: number;
    };
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    number: number;
    type: string;
    version: string;
    layout: string;
    engineLossMax: number;
    propellant_1: string;
    propellant_2: string;
    thrustToWeight: number;
  };
  landingLegs: {
    number: number;
    material: string;
  };
  payloadWeights: Array<{
    id: string;
    name: string;
    kg: number;
    lb: number;
  }>;
  flickrImages: string[];
};

export const rocketMapper = (rocketData: any): Rocket => {
  return {
    rocketID: rocketData.id,
    name: rocketData.name,
    type: rocketData.type,
    description: rocketData.description,
    active: rocketData.active,
    costPerLaunch: rocketData.cost_per_launch,
    successRatePercentage: rocketData.success_rate_pct,
    firstFlight: rocketData.first_flight,
    country: rocketData.country,
    company: rocketData.company,
    height: rocketData.height,
    diameter: rocketData.diameter,
    mass: rocketData.mass,
    stages: rocketData.stages,
    boosters: rocketData.boosters,
    firstStage: rocketData.first_stage,
    secondStage: rocketData.second_stage,
    engines: rocketData.engines,
    landingLegs: rocketData.landing_legs,
    payloadWeights: rocketData.payload_weights,
    flickrImages: rocketData.flickr_images,
  };
};
