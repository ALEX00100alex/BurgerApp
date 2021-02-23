const orm = require("../config/orm");

const burger = {
    devour(id, callback){
        orm.updateOne("burgers", "devoured", true, id, callback); 
    },
    create(burger_name, callback) {
        orm.insertOne("burgers", {burger_name: `"${burger_name}"`, devoured: false}, callback);
    },
    allBurgers(callback) {
        orm.selectAll("burgers", callback);
    },
};

module.exports = burger;