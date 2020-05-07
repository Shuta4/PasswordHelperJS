const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    login: String,
    email: String,
    name: String,
    surname: String,
    password: String,
    id: Number, 
    registration_date: Date
});

const User = mongoose.model("user", UserSchema);
module.exports = User;