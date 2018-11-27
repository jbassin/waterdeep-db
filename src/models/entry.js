const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubentrySchema = new Schema({
    title: String,
    visible: Boolean,
    text: String,
});

const EntrySchema = new Schema({
    title: String,
    parent: String,
    entry: [
        SubentrySchema,
    ],
});

const Entry = mongoose.model("Entry", EntrySchema);
module.exports = Entry;