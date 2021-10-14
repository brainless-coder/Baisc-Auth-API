const User = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;

function authController() {
    return {
        signup(req, res) {
            const {name, email, password} = req.body;
            // Validate request
            if (!name || !email || !password) {
                return res.send('All fields are required');
            }

            let pos = email.indexOf("@");
            let mailId = email.substring(0, pos);
            if ((password.toLocaleLowerCase()).includes(mailId)) {
                // res.send('Password cannot contain mail ID');
                res.status(400);
                return res.send({
                    "success": false
                });
            }
            
            // Check if email already exists in DB
            User.exists({ email: email }, (err, result) => {
                if (result) {
                    return res.send('Email already taken');
                }
            });

            bcrypt.hash(password, saltRounds, function(err, hash) {
                const newUser = new User({
                    name,
                    email,
                    password: hash
                });

                newUser.save((err) => {
                    if (err) {
                        console.log(err);
                        res.status(400);
                        res.send({
                            "success": false
                        });
                    } else {
                        res.status(201);
                        res.send({
                            "success": true
                        });
                    }
                });
            });
        },
        signin(req, res) {
            const {email, password} = req.body;
            
            User.findOne({email}, (err, foundUser) => {
                if(err) {
                    console.log(err);
                } else {
                    if (foundUser) {
                        bcrypt.compare(password, foundUser.password, function(err, result) {
                            if(result == true) {
                                res.status(200);
                                res.send({
                                    "success": true
                                });
                            } else {
                                res.status(400);
                                res.send({
                                    "success": false
                                });
                            }
                        })
                    } else {
                        res.send('Email not registered');
                    }
                }
            })
        },
        clean(req, res) {
            User.deleteMany({}, (err) => {
                if(!err) {
                    res.send({
                        "success": true
                    });
                } else {
                    res.send(err);
                }
            });
        }
    }
}

module.exports = authController;