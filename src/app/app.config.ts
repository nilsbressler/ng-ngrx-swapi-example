import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { combineReducers, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";

const reducers = combineReducers({});
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(StoreModule.forRoot(reducers)),
    importProvidersFrom(EffectsModule.forRoot()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), trace: true }),
    importProvidersFrom(HttpClientModule),
  ],
};
