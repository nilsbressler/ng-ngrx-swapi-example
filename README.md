# Ngrx Planets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.
This repository contains an Angular application demonstrating the usage of NGRX for state management. The application is a simple planet list and planet details that loads and displays data from SWAPI API.

## Installation and Running

1. Clone this repository: git clone <repository-url>
2. Navigate to the repository directory: cd <repository-folder>
3. Install dependencies: npm install
4. Start the application: ng serve
   <br>
   <br>
   The application will be running at http://localhost:4200/.

## NgRx Integration for Planet Data Management Using SWAPI API

This project demonstrates the use of NgRx for state management in an Angular application. It integrates with the Star Wars API (SWAPI) to fetch and manage data about planets.

### The key features include:

- **State Management:** Utilizes NgRx to handle the state of planet entities, ensuring a unidirectional data flow and making the state predictable.
- **Entity Management:** Employs NgRx Entity to simplify the management of collections of planet entities.
- **Effects:** Leverages NgRx Effects to handle side effects, such as fetching data from the SWAPI API, in an organized and testable manner.
- **Selectors:** Provides efficient and reusable selectors to retrieve specific pieces of state, such as all planets, a planet by its ID, and the state of data loading.
- **Actions and Reducers:** Defines a set of actions to fetch planet data and update the state accordingly, along with reducers to handle these actions.

### Key Features

**planet.state.ts**<br>
Defines the structure of the planet entities and the initial state.

```ts
export interface PlanetEntity {
  id: number;
  name: string;
  size: string;
  population: number;
  distance: number;
}

export interface PlanetsState extends EntityState<PlanetEntity> {}

export const planetsAdapter: EntityAdapter<PlanetEntity> =
  createEntityAdapter<PlanetEntity>();

export const initialPlanetsState: PlanetsState = planetsAdapter.getInitialState(
  {}
);
```

**planet.selectors.ts**</br>
Contains selectors to query the state for specific data.

```ts
export const selectPlanetsState =
  createFeatureSelector<PlanetsState>('planets');

export const selectAllPlanets = createSelector(
  selectPlanetsState,
  (state: PlanetsState) =>
    Object.values(state.entities).filter(
      (planet): planet is PlanetEntity => !!planet
    )
);

export const selectPlanetById = (id: number) =>
  createSelector(selectAllPlanets, planets =>
    planets.find(planet => planet?.id === id)
  );

export const selectPlanetsLoaded = createSelector(
  selectPlanetsState,
  (state: PlanetsState) => Object.keys(state.entities).length > 0
);
```

**planet.reducers.ts**</br>
Defines the reducer to manage state changes in response to actions.

```ts
export const planetsReducer = createReducer(
  initialPlanetsState,
  on(PlanetsActions.fetchPlanetsResultsSuccessAction, (state, { data }) => {
    return planetsAdapter.setAll(data, state);
  }),
  on(PlanetsActions.fetchPlanetsResultsFailureAction, (state, { error }) => {
    return { ...state, error };
  })
);
```

**planet.effects.ts**</br>
Implements side effects for fetching data from the API.

```ts
fetchPlanetsResults$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PlanetsActions.fetchPlanetsResultsAction),
    concatMap(() =>
      this.planetService.getAllPlanets().pipe(
        map(data => PlanetsActions.fetchPlanetsResultsSuccessAction({ data })),
        catchError(error =>
          of(PlanetsActions.fetchPlanetsResultsFailureAction({ error }))
        )
      )
    )
  )
);
```

**planets.actions.ts**</br>
Defines actions for fetching planet data and handling success or failure.

```ts
export const fetchPlanetsResultsAction = createAction(
  '[Planets] Fetch Results'
);

export const fetchPlanetsResultsSuccessAction = createAction(
  '[Planets] Fetch Results Success',
  props<{ data: Array<PlanetEntity> }>()
);

export const fetchPlanetsResultsFailureAction = createAction(
  '[Planets] Fetch Results Failure',
  props<{ error: Error }>()
);
```

**planet.service.ts**</br>
Service for interacting with the SWAPI API to retrieve planet data.

```ts
getAllPlanets(): Observable<Array<PlanetEntity>> {
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
```

By leveraging NgRx and SWAPI, this project showcases an efficient way to manage and interact with application state, providing a robust structure for handling asynchronous operations and ensuring a clean separation of concerns.

## Further Notes

This documentation provides a comprehensive overview of the structure and functionality of Angular NGRX. For more information on specific features and implementation details, refer directly to the corresponding files in the repository.
