const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FactionSchema = new Schema({
    name: String,
    rep: String,
    contact: String,
});

const Faction = mongoose.model("Faction", FactionSchema);
module.exports = Faction;