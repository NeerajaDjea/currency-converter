// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from '../app/app.routes';
import { currencyReducer } from './features/store/currency.reducer';

// Deexport const appConfig: ApplicationConfig =fine your ApplicationConfig
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      currency: currencyReducer,
    }),
  ],
};

// Bootstrap the app
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
