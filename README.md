## Currency Converter App

This is an Angular 18 application using NgRx for state management.

### Features

- Convert currency from EUR to any supported currency
- Uses Fixer API (latest rates endpoint)
- Reactive state management with NgRx
- Dynamic currency dropdown based on API response

### API Limitation

The Fixer API free tier only supports EUR as the base currency.

Because of this:

- All conversions are performed from EUR
- Conversion logic is handled on the client using returned exchange rates

### Example

EUR → USD:
amount \* rates['USD']

### Tech Stack

- Angular 18 (standalone APIs)
- NgRx Store & Effects
- RxJS
- Fixer API

### Future Improvements

- Support other base currencies (with paid API plan)
- Add caching for rates
- Improve UI/UX
- show correct curency symbols

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI

### Install dependencies

npm install

### Run the app

ng serve

Navigate to http://localhost:4200/
