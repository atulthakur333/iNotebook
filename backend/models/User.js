const mongoose= require('mongoose');

const UserSchema = new Schema({

    name:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique: true
    },

    password:{
        type:String,
        required: true
    },

    date:{
        type:Date,
        default: date.now
    },
});
const User = mongoose.model('user', UserSchema)
module.exports = User