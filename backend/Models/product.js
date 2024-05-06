const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        productname : {
            required : true,
            type : String,
        },

        rating : {
            required : true,
            type : Number,
        },

        price : {
            required : true,
            type : Number,
        },


        mrp : {
            required : true,
            type : Number,
        },
        
        desc : {
            required : true,
            type : String,
        },

        category : {
            required : true,
            type : String,
        },
      

        imageurl : {
            required : true,
            type : String,
        },

        discount: {
            type: Number,
            default: function() {
                return Math.round(((this.mrp - this.price) / this.mrp) * 100);
            }
        }
       
})

module.exports = mongoose.model("Products", productSchema);