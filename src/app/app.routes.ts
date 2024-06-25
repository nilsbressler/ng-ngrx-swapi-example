import { Routes } from '@angular/router';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';

export const routes: Routes = [
  { path: '', component: PlanetsListComponent },
  { path: 'planet/:id', component: PlanetDetailComponent },
];
