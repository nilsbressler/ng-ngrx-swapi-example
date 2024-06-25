export interface SwapiPlanet {
  name: string;
  diameter: string;
  population: string;
  orbital_period: string;
}

export interface SwapiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
