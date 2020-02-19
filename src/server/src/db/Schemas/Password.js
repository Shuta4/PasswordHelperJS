const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PasswordSchema = new Schema({
    title: String,
    description: String,
    login: String,
    email: String,
    password: String,
    additionalInformation: String, 
    creationDate: Date
});

const Password = mongoose.model("password", PasswordSchema);
module.exports = Password;