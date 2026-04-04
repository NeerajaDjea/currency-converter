import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CurrencyActions from '../../../store/currency.actions';
import { CurrencyState } from '../../../store/currency.state';

@Component({
  selector: 'app-converter',
  standalone: true,
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  // Inject without generic
  constructor(private store: Store) {}

  convert(amount: number, from: string, to: string) {
    console.log(amount, from, to);
    const typedStore = this.store as Store<{ currency: CurrencyState }>;

    typedStore.dispatch(CurrencyActions.convertCurrency({ amount, from, to }));
  }
}
