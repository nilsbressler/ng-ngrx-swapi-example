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

**State Management:** Utilizes NgRx to handle the state of planet entities, ensuring a unidirectional data flow and making the state predictable.
**Entity Management:** Employs NgRx Entity to simplify the management of collections of planet entities.
**Effects:** Leverages NgRx Effects to handle side effects, such as fetching data from the SWAPI API, in an organized and testable manner.
**Selectors:** Provides efficient and reusable selectors to retrieve specific pieces of state, such as all planets, a planet by its ID, and the state of data loading.
**Actions and Reducers:** Defines a set of actions to fetch planet data and update the state accordingly, along with reducers to handle these actions.

### Components

**planet.state.ts**<br>
Defines the structure of the planet entities and the initial state.

**planet.selectors.ts**</br>
Contains selectors to query the state for specific data.

**planet.reducers.ts**</br>
Defines the reducer to manage state changes in response to actions.

**planet.effects.ts**</br>
Implements side effects for fetching data from the API.

**planets.actions.ts**</br>
Defines actions for fetching planet data and handling success or failure.

**planet.service.ts**</br>
Service for interacting with the SWAPI API to retrieve planet data.

**planets-list.component.ts**</br>
Component to display a list of planets. It uses NgRx selectors to get the list of planets from the store and dispatches actions to fetch the data if not already loaded.

**planet-detail.component.ts**</br>
Component to display details of a single planet. It retrieves the planet ID from the route parameters, selects the planet from the store, and dispatches an action to fetch planets if the specific planet is not found.

By leveraging NgRx and SWAPI, this project showcases an efficient way to manage and interact with application state, providing a robust structure for handling asynchronous operations and ensuring a clean separation of concerns.

## Further Notes

This documentation provides a comprehensive overview of the structure and functionality of the Angular NGRX demo. For more information on specific features and implementation details, refer directly to the corresponding files in the repository.
