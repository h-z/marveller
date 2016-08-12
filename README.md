# Marveller

## Intro

This is a simple React demo app which uses the [Marvel API](http://developer.marvel.com/) to retrieve various objects as characters, comics and so on.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In case of this particular app you have to feed in your Marvel API public key to the app so you might have to run it the following mode:

`REACT_APP_MARVEL_API_KEY=<your api key> npm start`

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm test`

Testing is made by enzyme, mocha and chai. Mocked components are available in the `test/helpers` directory.

## Create React app

Facebook's [Create React app](https://github.com/facebookincubator/create-react-app) was used as app generator but at some point all the configuration was `npm eject`-ed into the project so I could modify it.

## Demo

There is a [demo](http://marveller.herokuapp.com) running at Heroku of this app.

