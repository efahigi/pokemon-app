//---Bringing in Express module /Import the Express module by typing the command npm i express in the terminal
const express = require('express');
const pokemon = require("./models/pokemon.js");
 //--Connect express instance to the variable "app" // i.e Create our express app
const app = express();
const PORT = 3000  // Sets the port, app should listen to
//Middleware (app.set)
app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())
//All Routes (app.get)
app.get('/', (req, res) => {
    res.send(' Welcome to the Pokemon Express App!');
})
// pokemon route (/pokemon)
app.get('/pokemon', (req, res) => {
    res.render('Index');
})
// Show route with id param
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {index:req.params.id}); //passing id as props
})
// At the bottom of every server, Tell our express app to "listen" to whatever port
app.listen(PORT, ()=>{
    console.log(`Listen to port, ${PORT} `)
})