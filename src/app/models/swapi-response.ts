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

// Typeguard for SwapiPlanet
export function isSwapiPlanet(obj: any): obj is SwapiPlanet {
  return (
    typeof obj.name === "string" &&
    typeof obj.diameter === "string" &&
    typeof obj.population === "string" &&
    typeof obj.orbital_period === "string"
  );
}

// Typeguard for SwapiResponse<T>
export function isSwapiResponse<T>(obj: any): obj is SwapiResponse<T> {
  return (
    typeof obj.count === "number" &&
    typeof obj.next === "string" &&
    (typeof obj.previous === "string" || obj.previous === null) &&
    Array.isArray(obj.results) &&
    obj.results.every((result: any) => isSwapiPlanet(result))
  );
}
