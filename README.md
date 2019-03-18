[![Test Coverage](https://api.codeclimate.com/v1/badges/d18afe072d67498b6d53/test_coverage)](https://codeclimate.com/github/emugaya/rng-app/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/d18afe072d67498b6d53/maintainability)](https://codeclimate.com/github/emugaya/rng-app/maintainability)
# Rando Number Generation App
The Random Number Generator Application is an Angular App used to generate 10 digit random telephone numbers starting with `0`.

The application allows a user generate a minimum of `1` number and a maximum of `10,000` numbers. The user is able to dowload the numbers generated. The generated file has a summary as listed below.

## Requirements
- [`Nodejs 8.9.4`](https://nodejs.org) and above
- [Angular CLI](https://cli.angular.io/)

## Getting started 
- Clone the repository.
```
$ git clone https://github.com/emugaya/rng-app.git
```
- Install packages
```
npm install
```
- Run development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
```
ng serve
```

## Screenshots of working application


##H Sample File Downloaded
```
Total Numbers generated:  10
Minimum Number: 0110803500
Minimum Number: 0832819667
Saved on: 20:50:28 GMT+0300 (East Africa Time)
Numbers Generated:
================================================
0110803500
0189519556
0263258113
0328846912
0343950902
0410841811
0428154140
0510694225
0664826442
0832819667
```

## Production Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
