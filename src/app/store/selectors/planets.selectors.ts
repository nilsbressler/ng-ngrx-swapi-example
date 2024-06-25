import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlanetEntity, PlanetsState } from '../planets.state';

/**
 * Selector to get the planets state.
 */
export const selectPlanetsState = createFeatureSelector<PlanetsState>('planets');

/**
 * Selector to get all planets.
 *
 * @returns {PlanetEntity[]} - Array of all planets.
 */
export const selectAllPlanets = createSelector(
    selectPlanetsState,
    (state: PlanetsState) => Object.values(state.entities).filter(
        (planet): planet is PlanetEntity => !!planet
    )
);

/**
 * Selector to get a planet by its ID.
 *
 * @param {number} id - The unique identifier of the planet.
 * @returns {PlanetEntity | undefined} - The planet with the given ID or undefined if not found.
 */
export const selectPlanetById = (id: number) => createSelector(
    selectAllPlanets,
    planets => planets.find(planet => planet?.id === id)
);

/**
 * Selector to check if planets have been loaded.
 *
 * @returns {boolean} - True if planets are loaded, false otherwise.
 */
export const selectPlanetsLoaded = createSelector(
    selectPlanetsState,
    (state: PlanetsState) => Object.keys(state.entities).length > 0
);
