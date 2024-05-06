const mongoose = require('mongoose');

const dealsSchema = new mongoose.Schema({
        productid : {
            required : true,
            type : String,
        },
})

module.exports = mongoose.model("Deals", dealsSchema);