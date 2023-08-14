
const express = require("express");

const app = express();
const PORT = 3000;

const pokemon = require("./models/pokemon.js");

// -------MiddleWare

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


app.get('/',function  (req, res) {
    res.send('Welcome to the Pokemon App!');
  });

  app.get('/pokemon',  function(req, res) {
    res.send(pokemon);
  });


app.listen(PORT, (req, res) => {
    console.log(`Listening on 3000`);
  });
  // -----------------{Server}