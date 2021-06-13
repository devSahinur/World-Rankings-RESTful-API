const express = require("express");
require("../src/db/conn");

const MensRanking = require("../src/models/mens")

const app = express();
const port = process.env.PORT || 4000;

app.get("/" ,async(req, res) =>{
    res.send("Hello This is home page")
})

app.listen(port, () =>{
    console.log(`connection is live at port on. ${port}`)
})