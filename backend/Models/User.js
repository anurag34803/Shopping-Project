const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema(
    {
       name : {
        type : String,
        required : true,
       },

       number : {
        type : String,
        required : true,
       },

       email : {
        type : String,
        required : true,
        unique: true
       },


    // this field type is already define by passport local manager   
    //   Password : {
    //     type : String,
    //     required : true,
    //    },
    }
)

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
// const user = mongoose.Model("Users",userSchema);
// module.exports = user;

module.exports  = mongoose.model("Users",userSchema);