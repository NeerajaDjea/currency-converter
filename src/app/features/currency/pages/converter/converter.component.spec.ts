import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterComponent } from './converter.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [ConverterComponent],
    providers: [
      provideMockStore({
        initialState: {
          currency: {
            result: null,
            loading: false,
            error: null,
            currencies: ['USD', 'EUR', 'GBP'],
          },
        },
      }),
    ],
  }).compileComponents();
});

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the component', () => {
    const fixture = TestBed.createComponent(ConverterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should dispatch convertCurrency on convert()', () => {
    const store = TestBed.inject(Store);
    spyOn(store, 'dispatch');
    const fixture = TestBed.createComponent(ConverterComponent);
    const component = fixture.componentInstance;

    component.amount = 10;
    component.toCurrency = 'USD';
    component.convert();

    expect(store.dispatch).toHaveBeenCalled();
  });
});
