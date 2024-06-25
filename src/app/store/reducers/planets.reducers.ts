import { createReducer, on } from "@ngrx/store";
import { initialPlanetsState, planetsAdapter } from "../planets.state";
import * as PlanetsActions from "../actions/planets.actions";

/**
 * Reducer for handling planets state changes.
 */
export const planetsReducer = createReducer(
  initialPlanetsState,
  on(PlanetsActions.fetchPlanetsResultsSuccessAction, (state, { data }) => {
    return planetsAdapter.setAll(data, state);
  }),
  on(PlanetsActions.fetchPlanetsResultsFailureAction, (state, { error }) => {
    return { ...state, error };
  }),
);
