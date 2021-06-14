const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")


// handle post req 
router.post("/mens", async (req, res) => {
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
router.get("/mens", async (req, res) =>{
    try{
        const getMens = await MensRanking.find({}).sort({"ranking":1});
        res.status(200).send(getMens);
    }catch(e){
        res.status(400).send(e)
    }
})

// get req single Individual data
router.get("/mens/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById({_id});
        res.status(200).send(getMen);
    }catch(e){
        res.status(400).send(e)
    }
})

// get req single Individual data update
router.patch("/mens/:id", async (req, res) =>{
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
router.delete("/mens/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.status(200).send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;