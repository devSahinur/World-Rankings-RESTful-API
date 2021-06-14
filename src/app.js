const express = require("express");
require("../src/db/conn");
// const MensRanking = require("../src/models/mens")
const router =require("../src/routers/men")

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(router);

app.get("/" ,  async(req , res) => {
    await res.send({
        "message": "World-Rankings-RESTful-API 😀"
    })
})

app.listen(port, () =>{
    console.log(`connection is live at port on. ${port}`)
})

