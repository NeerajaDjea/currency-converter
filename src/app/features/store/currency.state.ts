export interface CurrencyState {
  result: number | null;
  currencies: string[];
  loading: boolean;
  error: string | null;
}

export const initialCurrencyState: CurrencyState = {
  result: null,
  currencies: [],
  loading: false,
  error: null,
};
