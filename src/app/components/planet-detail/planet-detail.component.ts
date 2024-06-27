import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { PlanetEntity, PlanetsState } from '../../store/planets.state';
import { selectPlanetById } from '../../store/selectors/planets.selectors';
import { fetchPlanetsResultsAction } from '../../store/actions/planets.actions';

/**
 * Component for displaying the details of a single planet.
 */
@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent {
  planet$: Observable<PlanetEntity | undefined>;

  /**
   * The constructor retrieves the planet ID from the route parameters, selects the planet
   * from the store, and dispatches an action to fetch planets if the planet is not found.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<PlanetsState>
  ) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.planet$ = this.store.pipe(select(selectPlanetById(id)));
    this.planet$.subscribe(planet => {
      if (!planet) {
        this.store.dispatch(fetchPlanetsResultsAction());
      }
    });
  }

  /**
   * Navigates back to the planets list.
   */
  goBack(): void {
    this.router.navigate(['/']);
  }
}
