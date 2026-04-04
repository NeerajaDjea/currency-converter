export interface CurrencyState {
  amount: number;
  from: string;
  to: string;
  result: number | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CurrencyState = {
  amount: 0,
  from: 'GBP',
  to: 'USD',
  result: null,
  loading: false,
  error: null,
};
