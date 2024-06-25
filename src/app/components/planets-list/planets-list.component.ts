import { Component, OnInit } from '@angular/core';
import { PlanetEntity, PlanetsState } from '../../store/planets.state';
import { Observable, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { fetchPlanetsResultsAction } from '../../store/actions/planets.actions';
import { Router } from '@angular/router';
import {
  selectAllPlanets,
  selectPlanetsLoaded,
} from '../../store/selectors/planets.selectors';


/**
 * Component for displaying a list of planets.
 */
@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent implements OnInit {
  planetsList$: Observable<Array<PlanetEntity>>;
  planetsLoaded$: Observable<boolean>;

  constructor(
    private store: Store<PlanetsState>,
    private router: Router
  ) {
    this.planetsList$ = this.store.pipe(select(selectAllPlanets));
    this.planetsLoaded$ = this.store.pipe(select(selectPlanetsLoaded));
  }

  /**
   * Initializes the component, dispatching the action to fetch planets if they are not already loaded.
   */
  ngOnInit(): void {
    this.planetsLoaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(fetchPlanetsResultsAction());
          }
        })
      )
      .subscribe();
  }

  /**
   * Navigates to the detail view of the clicked planet.
   *
   * @param {number} id - The ID of the clicked planet.
   */
  onPlanetClick(id: number) {
    this.router.navigate(['/planet', id]);
  }
}
