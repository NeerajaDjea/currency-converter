import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as CurrencyActions from '../../../store/currency.actions';
import { CurrencyState } from '../../../store/currency.state';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  result$: Observable<number | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  currencies$!: Observable<string[]>;
  filteredCurrencies$!: Observable<string[]>;

  preferred = ['USD', 'GBP', 'INR', 'AUD', 'CAD'];
  amount = 1;
  toCurrency = 'USD';

  constructor(private store: Store<{ currency: CurrencyState }>) {
    this.result$ = store.pipe(select((state) => state.currency.result));
    this.loading$ = store.pipe(select((state) => state.currency.loading));
    this.error$ = store.pipe(select((state) => state.currency.error));
    this.currencies$ = this.store.select((state) => state.currency.currencies);
    this.filteredCurrencies$ = this.currencies$.pipe(
      map((currencies) => {
        if (!currencies) return [];

        const sorted = [...currencies].sort();

        const preferredCurrencies = this.preferred.filter((c) =>
          sorted.includes(c)
        );
        const otherCurrencies = sorted.filter(
          (c) => !this.preferred.includes(c)
        );

        const maxOther = 6;
        return [...preferredCurrencies, ...otherCurrencies.slice(0, maxOther)];
      })
    );
  }
  ngOnInit() {
    this.store.dispatch(
      CurrencyActions.convertCurrency({
        amount: 1,
        to: 'USD',
      })
    );
  }

  convert() {
    this.store.dispatch(
      CurrencyActions.convertCurrency({
        amount: this.amount,
        to: this.toCurrency,
      })
    );
  }
}
