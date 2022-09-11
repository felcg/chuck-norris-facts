# Chuck Norris Facts

This project is a simple React app for interacting with **[chucknorris.io](https://api.chucknorris.io/)** API.

## Instructions on how to run the project

After unzipping the project files you simply have to install the dependencies with
`npm install`. Then run the app with `npm start`. Both commands must be run from the root of the project.

## Tests

To run tests you have two options `npm run test` and `npm run test:ci`, the difference being that the second option also shows the coverage percentage of tests.

## Comments

For this project I followed some of the concepts of Domain Driven Design, so the code is split in different layers:

#### Application Layer:

> Responsible for applying the usecase rules defined in the Domain Layer. Example: A Query class will actually process what is defined in the Query interface and will make a query.

#### Domain Layer:

> Responsible for creating the interfaces that define how our usecases will work. Example: A Query interface will define what an Query inplementation needs to have to work properly.

#### Infra Layer

> Responsible for implementing interfaces that communicate with external libraries/apis/packages. Example: A Query class from the application layer needs to speak with an API, so the ApiHttpClient Class is created on the Infra layer.

#### Presentation Layer

> Responsible for interaction with user, in the case of a React app it would be the rendering of views and control of the state of the app.

#### Main Layer

> Responsible for settings related to the entire project.
