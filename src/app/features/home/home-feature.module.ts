import { NgModule } from '@angular/core';
import { PlanetsListComponent } from '../../components/planets-list/planets-list.component';
import { EffectsModule } from '@ngrx/effects';
import { PlanetsEffects } from '../../store/effects/planets.effects';
import { StoreModule } from '@ngrx/store';
import { planetsReducer } from '../../store/reducers/planets.reducers';
import { CommonModule } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';
import { PlanetDetailComponent } from '../../components/planet-detail/planet-detail.component';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [PlanetsListComponent, PlanetDetailComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('planets', planetsReducer),
    EffectsModule.forFeature([PlanetsEffects]),
    MatList,
    MatListItem,
    MatButton,
  ],
  exports: [PlanetsListComponent],
})
export class HomeFeatureModule {}
