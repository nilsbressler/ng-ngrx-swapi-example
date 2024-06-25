import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PlanetEntity } from "../store/planets.state";
import {
  isSwapiResponse,
  SwapiPlanet,
  SwapiResponse,
} from "../models/swapi-response";

/**
 * Service for interacting with the SWAPI API to fetch planets data.
 */
@Injectable({
  providedIn: "root",
})
export class PlanetService {
  private apiUrl = "https://swapi.dev/api/planets/";

  constructor(private http: HttpClient) {}

  /**
   * Fetches all planets from the API.
   *
   * @returns {Observable<PlanetEntity[]>} - Observable emitting an array of Planet entities.
   */
  getAllPlanets(): Observable<PlanetEntity[]> {
    return this.http.get<SwapiResponse<SwapiPlanet>>(this.apiUrl).pipe(
      map((response) => {
        if (!isSwapiResponse(response)) {
          console.log(response);
          throw new Error("Invalid API response for planets.");
        }

        return response.results.map((planet, index) => ({
          id: index + 1,
          name: planet.name,
          size: planet.diameter,
          population: parseInt(planet.population, 10) || 0,
          distance: parseInt(planet.orbital_period, 10) || 0,
        }));
      }),
    );
  }
}
