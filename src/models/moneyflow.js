const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoneyflowSchema = new Schema({
    text: String,
    value: Number,
});

const Moneyflow = mongoose.model("Moneyflow", MoneyflowSchema);
module.exports = Moneyflow;