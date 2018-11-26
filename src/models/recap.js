const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecapSchema = new Schema({
    month: String,
    day: String,
    text: String,
});

const Recap = mongoose.model("Recap", RecapSchema);
module.exports = Recap;