const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LevelSchema = new Schema({
    name: String,
    image: String,
    locked: Boolean,
    flavor: {
        text: String,
        author: String,
    },
    text: String,
});

const Level = mongoose.model("Level", LevelSchema);
module.exports = Level;