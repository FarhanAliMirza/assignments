const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://farhanalimirza19:lA5XLb1GJa0ZwCoK@cluster0.cs5xmon.mongodb.net/paytm");
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {String, required: true},
    lastName: {String, required: true},
    username: {String, required: true},
    password: {String, required: true},
});

const User = mongoose.model('User', userSchema);

module.exports = User;