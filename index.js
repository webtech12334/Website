/* Website Server with Express */
"use strict"
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs'); // Is this the promises version

/* External Requests */
const http = require('http');
const url = require('url'); // Do we need this
const OK = 200, NotFound = 404, BadType = 415, Error = 500;
const request = require('request-promise'); /* Do we need this? */

/* Handles the requests for specific files */
app.use(express.static(path.join(__dirname, 'public')));

/* Put these in another folder */
app.use((req,res,next) => { // Middleware
  const error = new Error('Not found');
  error.status = NotFound;
  next(error); // Will forward the error request
})

app.use((error, req, res, next) => {// This will handle errors from everywhere (including failed opeartions on the database)
  res.status(error.status || 500).send('Page Not Found'); // Either specified error code, or 500
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

                                 /* Tasks  */
// Implement content negociation to support old browsers
// Support HTTPs?
// HTTP Status codes
// Check supported filetypes with express
/* Use Middleware functions -- Have access to server request and response */
/* Use to serve static files to either general or specific requests  */

// A user sends and request information through routes
// We need to use get requests to return HTML, CSS, IMAGES ect (if someone goes
// to /flower, then execute a specific function )

// Middleware forwards requests to other files which may contain a router
// If you get pass the static folder that means it didnt have anything to handle
// your request so capture it
