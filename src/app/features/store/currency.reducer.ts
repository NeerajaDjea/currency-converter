import { createReducer, on } from '@ngrx/store';
import * as CurrencyActions from './currency.actions';
import { initialState } from './currency.state';

export const currencyReducer = createReducer(
  initialState,
  on(CurrencyActions.convertCurrency, (state, { amount, from, to }) => ({
    ...state,
    amount,
    from,
    to,
    loading: true,
    error: null,
  })),
  on(CurrencyActions.convertCurrencySuccess, (state, { result }) => ({
    ...state,
    result,
    loading: false,
  })),
  on(CurrencyActions.convertCurrencyFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
