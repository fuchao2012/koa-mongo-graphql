const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GadgetSchema = new Schema({
    name: String,
    release_date: Date,
    by_compony: String,
    price: Number
})

module.exports = mongoose.model('Gadget', GadgetSchema);
