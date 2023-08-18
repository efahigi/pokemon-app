//---Load express into my  application
const express = require('express');

const pokemon = require("./models/pokemon.js");
 //---Instantiate my express app
const app = express();
const PORT = 3000  // Sets the port

//Middleware (app.set)
app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())
//All Routes (app.get)// Define the routes needed
app.get('/', (req, res) => {
    res.send(' Welcome to the Pokemon App!');
})
// pokemon route (/pokemon)
app.get('/pokemon', (req, res) => {
    res.render('Index');
})
// Define the routes needed
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {index:req.params.id}); //passing id as props
})
// Tell express app to listen to port(3000)
app.listen(PORT, ()=>{
    console.log(`Listen to port, ${PORT} `)
})