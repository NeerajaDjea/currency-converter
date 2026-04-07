import { Injectable, inject } from '@angular/core';
import { CurrencyService } from '../../core/services/currency.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CurrencyActions from './currency.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CurrencyEffects {
  private actions$ = inject(Actions);
  private currencyService = inject(CurrencyService);

  convert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrencyActions.convertCurrency),
      mergeMap((action) =>
        this.currencyService.convertFromEUR(action.amount, action.to).pipe(
          map((res) =>
            CurrencyActions.convertCurrencySuccess({
              result: res.result,
              rates: res.rates,
            })
          ),
          catchError((err) =>
            of(
              CurrencyActions.convertCurrencyFailure({
                error: err.message,
              })
            )
          )
        )
      )
    )
  );
}
