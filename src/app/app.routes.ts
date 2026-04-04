import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/currency/currency.routes').then(
        (m) => m.CURRENCY_ROUTES
      ),
  },
];
