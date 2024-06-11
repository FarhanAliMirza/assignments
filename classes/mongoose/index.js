const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://farhanalimirza19:lA5XLb1GJa0ZwCoK@cluster0.cs5xmon.mongodb.net/usersappnew")

const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({ name: 'Farhan', email: 'farhan@gmail.com', password: '123456' });
user.save()