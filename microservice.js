const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Setup the computational routes.
const computeRoute = require('./routes/compute')
const dbRoute = require('./routes/database')
app.use('/compute', computeRoute)
app.use('/documents', dbRoute)

//Use ejs 
app.set('view engine', 'ejs')

app.listen(3000, console.log("Listening on port: 3000"))