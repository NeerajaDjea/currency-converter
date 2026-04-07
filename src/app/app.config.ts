import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { currencyReducer } from './features/store/currency.reducer';
import { CurrencyEffects } from './features/store/currency.effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ currency: currencyReducer }),
    provideEffects([CurrencyEffects]),
  ],
};

export const environment = {
  production: false,
  fixerApiKey: 'b007f3101abdfb160dcdb4a42be5de18',
  fixerApiUrl: 'https://data.fixer.io/api',
};

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
