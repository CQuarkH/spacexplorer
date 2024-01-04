export type Route = {
  name: string;
  path: string;
};

export const routes: Route[] = [
  {
    name: "LAUNCHES",
    path: "/launches",
  },
  {
    name: "VEHICLES",
    path: "/vehicles",
  },
  {
    name: "LAUNCHPADS",
    path: "/launchpads",
  },
];
