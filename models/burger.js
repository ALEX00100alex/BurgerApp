const orm = require("../config/orm");

const burger = {
    devour(id, callback){
        orm.updateOne("burgers", "devoured", true, id, callback); 
    },
    create(burger_name, callback) {
        orm.insertOne("burgers", {burger_name}, callback);
    },
    allBurgers(callback) {
        console.log("burger.js", "get all burgers");
        orm.selectAll("burgers", callback);
    },
};

module.exports = burger;