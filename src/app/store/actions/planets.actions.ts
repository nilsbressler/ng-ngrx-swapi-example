import { createAction, props } from "@ngrx/store";
import { PlanetEntity } from "../planets.state";

/**
 * Action to fetch planets results.
 */
export const fetchPlanetsResultsAction = createAction(
  "[Planets] Fetch Results",
);

/**
 * Action dispatched when fetching planets results is successful.
 *
 * @param {PlanetEntity[]} data - Array of planet entities.
 */
export const fetchPlanetsResultsSuccessAction = createAction(
  "[Planets] Fetch Results Success",
  props<{ data: Array<PlanetEntity> }>(),
);

/**
 * Action dispatched when fetching planets results fails.
 *
 * @param {Error} error - Error object.
 */
export const fetchPlanetsResultsFailureAction = createAction(
  "[Planets] Fetch Results Failure",
  props<{ error: Error }>(),
);
