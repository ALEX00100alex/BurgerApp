const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/api/burgers", (req,res) => {
    console.log("get all burgers")
    burger.allBurgers(result => {
        console.log(result);
        res.json(result);
    });
});

//post - create
router.post("/api/burgers", (req,res) => {
    console.log("add a new burger");
    const name = req.body.name;
    burger.create(name, result => {
        console.log(result);
        res.json(result);
    });
});

//put - updateone
router.put("/api/burgers", (req,res) => {
    console.log("devour a burger");
    const id = req.body.id;
    burger.devour(id, result => {
        console.log(result);
        res.json(result);
    });
});

module.exports = router;