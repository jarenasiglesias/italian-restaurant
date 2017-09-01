//Express
var express = require('express');
var app = express(),
    http = require("http"),
    server = http.createServer(app)
    //Mongoose
var mongoose = require('mongoose');
var uri = "mongodb://localhost:27017/italian";
var options = {
    useMongoClient: true
}
var db = mongoose.connection;

//Conexion a MongoDB
mongoose.connect(uri, options);
db.on('error', function() {
    console.log("Error al conectarse a MongoDB")
});
db.once('open', function() {
    console.log("Conectado a MongoDB")
});

//Schema del contenido de la BBDD
var foodSchema = mongoose.Schema({
    category: String,
    description: String,
    photo: String,
    price: Number
});

var drinkSchema = mongoose.Schema({
    category: String,
    description: String,
    photo: String,
    price: Number
});

//Estructura tabla BBDD
var FoodModel = mongoose.model('foods', foodSchema, 'foods');
var DrinkModel = mongoose.model('drinks', drinkSchema, 'drinks');

//GET
app.get('/food', function (req, res) {
  console.log("Todas las comidas")
  FoodModel.find(function(err,p){
    if (err) return console.error(err);
      res.json(p);
    });
});

app.get('/drink', function (req, res) {
  console.log("Todas las bebidas")
  DrinkModel.find(function(err,p){
    if (err) return console.error(err);
      res.json(p);
    });
});

//busca sólo pizza
app.get('/food/pizza', function (req, res) {
  console.log("Pizza")
  FoodModel.find({"category": 'pizza'},function(err,p){
    if (err) return console.error(err);
      res.json(p);
    });
});

//busca spaguetti
app.get('/food/spaguetti', function (req, res) {
  console.log("Spaguetti")
  FoodModel.find({"category": 'spaguetti'},function(err,p){
    if (err) return console.error(err);
      res.json(p);
    });
});

//busca tortellini
app.get('/food/tortellini', function (req, res) {
  console.log("Tortellini")
  FoodModel.find({"category": 'tortellini'},function(err,p){
    if (err) return console.error(err);
      res.json(p);
    });
});

//busca gnocci
app.get('/food/gnocci', function (req, res) {
  console.log("Gnocci")
  FoodModel.find({"category": 'gnocci'},function(err,p){
    if (err) return console.error(err);
      res.json(p);
    });
});

//busca refrescos
app.get('/drink/refrescos', function (req, res) {
  console.log("Refrescos")
  DrinkModel.find({"category": 'refrescos'},function(err,p){
    if (err) return console.error(err);
      res.json(p);
    });
});

//busca tinto
app.get('/drink/vino', function (req, res) {
  console.log("Vino")
  DrinkModel.find({"category": 'vino'},function(err,p){
    if (err) return console.error(err);
      res.json(p);
    });
});

//busca cerveza
app.get('/drink/tinto', function (req, res) {
  console.log("Cerveza")
  DrinkModel.find({"category": 'cerveza'},function(err,p){
    if (err) return console.error(err);
      res.json(p);
    });
});

app.listen(3000);