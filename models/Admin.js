const {Schema, model} = require('mongoose');
const bcrypt  = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');

//Define Admin schema
const AdminSchema = new Schema({
    login:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});
// will drop the error if login is not unique
AdminSchema.plugin(uniqueValidator);

module.exports = model('Admin', AdminSchema);

