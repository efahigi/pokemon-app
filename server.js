//---Load express into my  application
const express = require('express');

 //---Instantiate my express app
const app = express();
const PORT = 3000  // Sets the port

require("dotenv").config();
const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon.js");
const methodOverride = require('method-override');
const pokemonData = require("./utilities/pokemonData.js");

//Middleware 
app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
    });

app.use(methodOverride('_method'));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    
    mongoose.connection.once("open", () => {
    console.log("connected to mongo");
    });

    //our seed routes
    app.get('/pokemon/seed', async(req, res) => {
      //deleting all current data(optional)
      //await Pokemon.deleteMany({});
      //creating a list of pokemon into our database
      await Pokemon.create(pokemonData);
      res.redirect('/pokemon')
  });


 // Define all pokemon routes  needed
app.get('/', (req, res) => {
    res.send(' Welcome to the Pokemon App!');
})
// (/pokemon)
app.get("/pokemon", (req, res) => {
    Pokemon.find({}).then((allPokemon) => {
      res.render("Index", {
        pokemon: allPokemon,
      });
    });
  });
// -------{POST}
app.post("/pokemon", async (req, res) => {
    const newPokemon = await Pokemon.create(req.body);
   //await res.send(new);
    res.redirect("/pokemon");
    });
    
    // ----------------{NEW}
    app.get("/pokemon/New", (req, res) => {
    res.render("New");
    });

    // -----------------{DELETE}
    app.delete('/pokemon/:id', async(req,res) =>{
        await Pokemon.findByIdAndRemove(req.params.id)
        res.redirect('/pokemon')
    
    })
     // -----------------{put}
    app.put('/pokemon/:id', async(req, res)=>{
      const updatedPokemon = await Pokemon.findByIdAndUpdate(req.params.id,req.body)  
      res.redirect(`/pokemon/${req.params.id}`);
      });
    
    // ------------------------{EDIT}
    app.get('/pokemon/:id/Edit', async(req, res)=>{
        const foundPokemon =  await Pokemon.findById(req.params.id) 
        console.log("FoundPokemon:", foundPokemon)
          res.render('Edit',{
            pokemon: foundPokemon
          })
        })
    
    // -------------{ Show => Each Pokemon}
    app.get("/pokemon/:id", async (req, res) => {
        const eachPokemon = await Pokemon.findById(req.params.id)
        await res.render("Show",{
            pokemon: eachPokemon
        })
      });

// Tell express app to listen to port(3000)
app.listen(PORT, ()=>{
    console.log(`Listen to port, ${PORT} `)
})