// Require express which is a minimal and flexible Node.js web application framework
const express = require('express')
// Require dotenv which loads environment variables from the .env file into process.env
const dotenv = require('dotenv').config()
// This is the port that we want our server to run on. 
const port = process.env.APP_PORT || 5000
const app = express()

app.use('/api_v1.0/goals', require('./routes/goalRoutes'))

app.listen(port, ()=> console.log('Server started successfully on port ' + port))
