import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private API_KEY = 'b007f3101abdfb160dcdb4a42be5de18';
  private API_URL = `https://data.fixer.io/api/latest?access_key=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  convertFromEUR(amount: number, to: string) {
    return this.http.get<any>(this.API_URL).pipe(
      map((res) => {
        if (!res.success) throw new Error('API Error');

        const rates = res.rates;
        const result = Number((amount * rates[to]).toFixed(2));

        return {
          result,
          rates,
        };
      })
    );
  }
}
