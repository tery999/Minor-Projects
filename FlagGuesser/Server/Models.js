const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema( {
    name: String,
    flagURL: String,
})

const flag = mongoose.model("Flag", countrySchema);
module.exports = flag;