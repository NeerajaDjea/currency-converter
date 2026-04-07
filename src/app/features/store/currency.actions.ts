import { createAction, props } from '@ngrx/store';

export const convertCurrency = createAction(
  '[Currency] Convert',
  props<{ amount: number; to: string }>()
);

export const convertCurrencySuccess = createAction(
  '[Currency] Convert Success',
  props<{ result: number; rates: Record<string, number> }>()
);

export const convertCurrencyFailure = createAction(
  '[Currency] Convert Failure',
  props<{ error: string }>()
);
