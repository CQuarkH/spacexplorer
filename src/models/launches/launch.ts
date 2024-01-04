export type Launch = {
  launchID: string;
  flightNumber: string;
  missionName: string;
  launchDate: Date | string;
  rocketID: string;
  launchSuccess?: boolean;
  thumbnailUrl?: string;
  missionDescription: string;
  payloadCustomer: string;
  missionDestination: string;
  launchpadID: string;
  detailedOutcome: string;
  mediaGallery: {
    images: string[];
    videoID: string | null;
  };
  additionalLinks: string[];
};

export const launchMapper = (launch: any): Launch => {
  return {
    launchID: launch.id,
    flightNumber: launch.flight_number,
    missionName: launch.name,
    launchDate: launch.date_utc,
    rocketID: launch.rocket,
    launchSuccess: launch.success,
    thumbnailUrl: launch.links.patch.small,
    missionDescription: launch.details || "No details available",
    payloadCustomer:
      launch.payloads
        ?.map((payload: any) => payload.customers)
        .flat()
        .join(", ") || "No customers",
    missionDestination: "",
    launchpadID: launch.launchpad,
    detailedOutcome: "",
    mediaGallery: {
      images: launch.links.flickr_images || [],
      videoID: launch.links.youtube_id,
    },
    additionalLinks: [launch.links.article, launch.links.wikipedia].filter(
      Boolean
    ),
  };
};
