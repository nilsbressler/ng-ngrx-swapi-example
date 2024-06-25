import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as PlanetsActions from '../actions/planets.actions';
import { PlanetService } from '../../services/planet.service';


/**
 * Effects class for handling side effects related to planets.
 */
@Injectable()
export class PlanetsEffects {
    /**
     * Effect to fetch planets results.
     */
  fetchPlanetsResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlanetsActions.fetchPlanetsResultsAction),
      concatMap(() =>
        this.planetService.getAllPlanets().pipe(
          map(data =>
            PlanetsActions.fetchPlanetsResultsSuccessAction({ data })
          ),
          catchError(error =>
            of(PlanetsActions.fetchPlanetsResultsFailureAction({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private planetService: PlanetService
  ) {}
}
