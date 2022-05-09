# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Weather App Work flow
Steps:

1)Extract the zip file, Open in any development environment(like: Visual Studio Code)
2)npm install
3)It will open by default port 4200
4)Enter the city name(like: pune, hyderabad)
5)Showing the weather details based on city name
6)Hitting the weather api that is below one here q={{cityname}}
https://api.openweathermap.org/data/2.5/weather?q=hyderabad&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499
7)If you have check another city details just click the clear button and do enter another city name
8)Incase enter wrong city name showing the error (taostr) message

Note: Testcases are not written for this app
