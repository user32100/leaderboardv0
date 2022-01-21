// we'll place a single file, out of which we'll run our server: index.js

// We'll use Express to create a simple web server for us which runs on port 3001
// if no value is given for the environment variable PORT (Heroku will set this value when we deploy our app)

// express is a dependency and we should install it with npm install
const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 3001;

const app = express();

// After that, we will make a script in package.json
// that will start our web server when we run it with npm start

// Finally, we can run our app using this script by running npm start in our terminal
// and we should see that it is running on port 3001

// We want to use our Node and Express server as an API,
// so that it can give our React app data, change that data,
// or do some other operation only a server can do.

// In our case, we will simply send our React app
// a message that says "Hello from server!" in a JSON object

// The code below builds an endpoint for the route /api.

// ***
// If our React app makes a GET request to that route,
// we respond (using res, which stands for response) with our JSON data


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
// This code will first allow Node to access our built React project
// using the express.static function for static files.


// Handle GET request to /api route
app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!"});
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
// And if a GET request comes in that is not handled by our /api route,
// our server will respond with our React app.


app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`);
});

// And to test this, we can simply visit http://localhost:3001/api
// in our browser and see our message: