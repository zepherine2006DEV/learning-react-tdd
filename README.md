## Learning React TDD

The goal of this project is to learn about test driving the development of a React app, so that I can apply a good development process to front end work.

I've used create-react-app to bootstrap the application, for speed. Then I developed a simple page which shows product images, based on the tutorial from Pluralsight (below).
You can see the evolution of the app through the git commits.

## How to Install

- Install Node.js.
- Clone this project.
- Run npm install to get all the dependencies.

```console
$ npm install
```

## How to Run

```console
$ npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## How to Test

```console
$ npm test
```

Launches the test runner in the interactive watch mode.<br>

## Technology Used

React 16.9  
Enzyme 3.10.0

I've used enzyme for shallow rendering of components, to enable components to be tested in isolation.

## Learning Resources Used

Pluralsight - Test Driven Development Using React

## Starting Point

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learning Notes

ES6 Javascript - import and export syntax.
File structure - separating view components from containers, where state is managed.
