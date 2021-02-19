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



module.exports = router;