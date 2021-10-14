const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, "name can't be blank"]},
    email: {type: String, required: [true, "email can't be blank"], match: [/\S+@\S+\.\S+/, "email is invalid"]},
    password: {type: String, required: [true, "password can't be blank"], match: [/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "password is invalid"]}
}, { timestamps: true });


module.exports = mongoose.model("User", userSchema);