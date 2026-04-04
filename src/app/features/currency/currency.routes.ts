import { Routes } from '@angular/router';
import { ConverterComponent } from './pages/converter/converter.component';

export const CURRENCY_ROUTES: Routes = [
  {
    path: '',
    component: ConverterComponent,
  },
];
