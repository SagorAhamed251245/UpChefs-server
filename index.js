const express = require("express");

const app = express();

const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const chefDetails = require("./data/ChefDetails .json")

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/chefs',(req, res) => {
    res.send(chefDetails) 
})
 app.get('/chefs/:id', (req , res)=> {
    const id = req.params.id;
    const item = chefDetails?.find(p => p.id == id)
    res.send(item)
 })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})