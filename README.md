# Product Management

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

Product management application developed by SpringCT as an assignment using Angular 7 is a SPA application having following features. We have used Angular material theme therefore, we are not using separate directory structure like theme / fonts, etc. We have used BehaviorSubject for message passing for communication between components. Architecture is modular which clearly idetifies different modules such categories, products and separate service layer to take care of MVC architecture. We have hard coded data for categories to prove the concept, however product and categories data can eventually fetched from communication layer via RESTful APIs.

### Features:
- List products as per categories
- Add, update, delete and search products
- Each product has name, price, image and category
- Search filters product list on the basis product name across all categories
- On theme change color of all buttons is changed along with font

### Limitations:
- List of categories is hard coded
- No authentication, authorization
- Product image for newly added products is generic
- Product, categories data is local to the application

### From technical perspective we have implemented
- Base application is generated using Angular CLI 
- Standard Angular project structure 
- Page routes
- Angular material theme for dynamically changing look and feel
- Communication between components using rxjs

------------------------------------------

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
