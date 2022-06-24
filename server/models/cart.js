const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    }
});

module.exports = new mongoose.model("Cart", cartSchema);