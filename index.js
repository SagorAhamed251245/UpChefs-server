const express = require("express");
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
const cors = require('cors');
const chefDetails = require('./chefs.json');
const recipes = require('./recipes.json');
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/chefs',(req, res) => {
    res.send(chefDetails) 
});
 app.get('/chefs/:id', (req , res)=> {
    const id = req.params.id;
    const item = chefDetails?.find(p => p.id == id)
    res.send(item)
 });
 app.get('/recipes', (req, res) => {
    res.send(recipes)
 })
 app.get('/recipes/:id',(req, res) => {
    const id = req.params.id;
    const item = recipes?.find(p => p.id == id)
    res.send(item)
 })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})