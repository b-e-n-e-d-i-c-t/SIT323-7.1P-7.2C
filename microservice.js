const express = require('express')
const app = express()

//Setup the computational routes.
const computeRoute = require('./routes/compute')
app.use('/compute', computeRoute)


//Use ejs 
app.set('view engine', 'ejs')

app.listen(3000, console.log("Listening on port:    "))