import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

/**
 * Interface representing a Planet entity.
 *
 * @property {number} id - The unique identifier of the planet.
 * @property {string} name - The name of the planet.
 * @property {string} size - The size of the planet.
 * @property {number} population - The population of the planet.
 * @property {number} distance - The distance of the planet from a reference point.
 */
export interface PlanetEntity {
  id: number;
  name: string;
  size: string;
  population: number;
  distance: number;
}

/**
 * Interface representing the state of planets which extends EntityState.
 */
export interface PlanetsState extends EntityState<PlanetEntity> {}

/**
 * Adapter for managing Planet entities within the state.
 */
export const planetsAdapter: EntityAdapter<PlanetEntity> =
  createEntityAdapter<PlanetEntity>();

/**
 * Initial state for planets.
 */
export const initialPlanetsState: PlanetsState = planetsAdapter.getInitialState(
  {}
);
