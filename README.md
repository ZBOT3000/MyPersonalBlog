# My Personal Blog

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Client vs Server

Please take note, the project consists of the client side( ReactJS, Tailwind CSS ) as well as the server side (NodeJs , ExpressJs).

## To run server side:

- cd personalblog
- cd server
- node .

## To run client side:

- cd personalblog
- cd client
- npm start

### `NB: Please first run the server side before running the client side`

- A suggested way of doing so is to have 2 terminals open side by side, one for server and the other for client

![Client Vs Server](/personalblog/client/src/assets/ClientvsServer.png)

## Under Client Side

Before we run our application, we suggest you first run:

### `"npm install" or "npm i"`

Which will install all the necessary packages and dependencies that are needed

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Once the app is running:

![App](/personalblog/client/src/assets/OpeningPage.png)

## Development Blockers:

- Payload registers newly added data, however POST request responds with 404 message, signaling that the server could not POST. It could be that there is something that I am missing or overlooked in the implementation

![Error](/personalblog/client/src/assets/Error.png)

![Payload](/personalblog/client/src/assets/Payload.png)

![Status](/personalblog/client/src/assets/Status.png)

## Suggested Different Approach:

## `The Mern Approach`

Comprising of MongoDB, ExpressJs, ReactJs and NodeJS

![MERN](/personalblog/client/src/assets/MERN.png)

With MongoDB added to the mix, it would help store our data in a JSON formate natively. Meaning that we'd be able to run queries to the data.

MongoDB also works well with Node.js and JavaScript, which makes storing, manipulating, and representing JSON data quite simple and efficient.

The combination means that JSON data flows naturally from front to back, making it fast to build on and reasonably simple to debug.
