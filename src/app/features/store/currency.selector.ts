import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrencyState } from './currency.state';

export const selectCurrencyState =
  createFeatureSelector<CurrencyState>('currency');

export const selectResult = createSelector(
  selectCurrencyState,
  (state) => state.result
);

export const selectLoading = createSelector(
  selectCurrencyState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectCurrencyState,
  (state) => state.error
);
