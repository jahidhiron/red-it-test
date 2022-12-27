# Installation, up and running

Launch the Terminal app and use bellow command to install, up and running

## Clone repository

Run bellow command to clone this repository <br />
`git clone git@github.com:jahidhiron/red-it-test.git .`

## Server installation, up and running

You may use npm or yarn. Like `yarn` and `yarn start` <br />

`cd server` <br />
`npm install` <br />
`npm start` <br />

## Client side installation, up and running

You may use npm or yarn. Like `yarn` and `yarn start` <br />

`cd client` <br />
`npm install` <br />
`npm start` <br />
<br />
<br />

# Documentation

Here I have discussed about which technology I have used, and why used. <br />

## Server side technology

### Framework/Library and modules

1. I have used `node.js` runtime environment for server side
2. `Express.js` web framework
3. To prevent Cross-site request forgery (CSRF) attack I have used `csurf`
4. To validate request, I have used `express-validator`
5. I have used `axios`. It is a promised-based HTTP client for JavaScript.

### Project setup

1. I have used component based architecture in server side
2. There are some `extra.json` file which is used to populate data
3. Axios is used to fetch data from [swapi.io](https://swapi.dev/)
<br />

## Client side technology

### Framework/Library and modules

1. I have used `react.js` to handle client side UI
2. I have used `axios`. It is a promised-based HTTP client for JavaScript.
3. For state management I have used `react-redux`
4. For client side route management I have used `react-router-dom`
5. `Redux-Saga` is a middleware library used to allow a redux store to asynchronously interact with resources outside of itself.
6. `react-helmet-async` to handle metadata

### Project setup

1. Component based architecture
2. Right now, I have used only `Public layout`. But if we need then we can use `Private layout` or `Super private layout`
3. Axios is used to fetch data from `node.js server`
<br />

## Decision

1. `Why nodejs/Express?: ` Node. js uses non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices.
2. `Why react.js?: ` It provides state-of-the-art functionality and is an excellent choice for developers looking for an easy-to-use and highly productive JavaScript framework. Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages. It also provide `virtual DOM` which provides more performant.
3. When I have fetched character detail from [swapi.io](https://swapi.dev/) , it provides a json object which some api endpoint. If I again fetch those endpoint then It will not performant. That's why I have used some `extra.json` file to filter those enpoint
4. I have used `redux-saga` instead of `redux-thunk`. As it provides some effect which gives me more control
5. Debouncing is used in searching instead of searching for every character
