const mongoose = require('mongoose')

const FishSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    weight: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
});

const FishModel = mongoose.model("Fish", FishSchema)

module.exports = FishModel;

