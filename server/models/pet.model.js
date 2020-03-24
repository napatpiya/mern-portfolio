const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "You must provide the name!"],
        minlength: [3, "Shoule be at least 3 character!"]
    },
    type: { 
        type: String,
        required: [true, "You must provide the type!"],
        minlength: [3, "Shoule be at least 3 character!"]
    },
    desc: {
        type: String,
        required: [true, "You must provide the description!"],
        minlength: [3, "Shoule be at least 3 character!"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    like: {
        type: Number,
    }
}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);