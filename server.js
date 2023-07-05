/**
 * TO GOD BE THE GLORY
 */

// Require express which is a minimal and flexible Node.js web application framework
const express = require('express')
// Require colors to enable us to log to the console in different colors
const colors = require('colors')
// Require dotenv which loads environment variables from the .env file into process.env
const dotenv = require('dotenv').config()
// Require the error handler middleware
const { errorHandler } = require('./middleware/errorMiddleware')
// This is the port that we want our server to run on. 
const port = process.env.APP_PORT || 5000
// Connect to the database as the application is loading
const connectDB = require('./config/db')
// Bring in Mongoose to help with database operations through the models
const { connect } = require('mongoose')
// Open a connection to the database
connectDB()
// Create an Express application
const app = express()
// Return a middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json())
// Return a middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({ extended: false }))
// Send all the '/api_v1.0/goals' requests to the 'goalRoutes' file for redirection
app.use('/api_v1.0/goals', require('./routes/goalRoutes'))
// Make the error handling middleware available through out the application
app.use(errorHandler)
// Specify the port where the application shall listen for connections
app.listen(port, () => console.log('Server started successfully on port ' + port))
