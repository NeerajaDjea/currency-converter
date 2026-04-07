import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app/app.routes';
import { currencyReducer } from './app/features/store/currency.reducer';
import { CurrencyEffects } from './app/features/store/currency.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ currency: currencyReducer }),
    provideEffects([CurrencyEffects]), // 👈 critical
  ],
}).catch(console.error);
