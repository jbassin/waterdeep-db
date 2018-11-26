const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProspectSchema = new Schema({
    text: String,
    value: Number,
});

const Prospect = mongoose.model("Prospect", ProspectSchema);
module.exports = Prospect;