const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens")

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())

// handle post req 
app.post("/mens", async (req, res) => {
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body)
        const insertMens = await addingMensRecords.save()
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
})

// get req all data
app.get("/mens", async (req, res) =>{
    try{
        const getMens = await MensRanking.find({});
        res.status(200).send(getMens);
    }catch(e){
        res.status(400).send(e)
    }
})

// get req single Individual data
app.get("/mens/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById({_id});
        res.status(200).send(getMen);
    }catch(e){
        res.status(400).send(e)
    }
})

// get req single Individual data update
app.patch("/mens/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.status(200).send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})

// handle delete req of individual
app.delete("/mens/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.status(200).send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port, () =>{
    console.log(`connection is live at port on. ${port}`)
})

