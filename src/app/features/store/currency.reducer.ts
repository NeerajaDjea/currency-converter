import { createReducer, on } from '@ngrx/store';
import { initialCurrencyState, CurrencyState } from './currency.state';
import * as CurrencyActions from './currency.actions';

export const currencyReducer = createReducer(
  initialCurrencyState,
  on(CurrencyActions.convertCurrency, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CurrencyActions.convertCurrencySuccess, (state, { result, rates }) => ({
    ...state,
    result,
    currencies: Object.keys(rates).sort(),
    loading: false,
    error: null,
  })),
  on(CurrencyActions.convertCurrencyFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
