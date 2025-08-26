const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/users");
const jwt = require('jsonwebtoken');
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(express.static(__dirname + "/public"))

function isLogin(req, res, next) {
    if (!req.headers.authorization) {
        return res.json({
            success: false,
            message: "no authorization key provided"
        })
    }
    let token = req.headers.authorization
    console.log(token);
    if (!token) {
        return res.json({
            success: false,
            message: "please login"
        })
    }
    let decode = jwt.verify(token, "okkkkk");
    console.log(decode)
    if (!decode) {
        return res.json({
            success: false,
            message: "invalid token"
        })
    }
    req.user = decode.user
    next()
}

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "server running ok"
    })
})

app.get("/home", isLogin, (req, res) => {
    console.log(req.user)
    let username = req.user.name;
    res.json({
        success: true,
        message: "welcome " + username
    })
})

// endpoint for signup --- adding new user into database
app.post("/api/users/signup", async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let userExist = await User.findOne({email:email})
        if (userExist) {
            return res.json({
                success: false,
                message: "user already exists with this email so please login"
            })
        }
        let newUser = new User({
            name: name,
            email: email,
            password: password
        })
        await newUser.save()
        res.json({
            success: true,
            message: "user registered successfully, please login to continue"
        })
    } catch (error) {
        console.log(error.message);
        res.json({
            error: {
                message: error.message
            }
        })
    }
})

app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;
    let userExist = await User.findOne({email:email})
    if (!userExist) {
        return res.json({
            success: false,
            message: "user does not exist, please signup"
        })
    }
    if (userExist.password != password) {
        return res.json({
            success: false,
            message: "invalid password, please try again"
        })
    }
    if (userExist.password == password) {
        let token = jwt.sign({"user":userExist},"okkkkk") // making of the token
        return res.json({
            success: true,
            message: "login successful",
            token: token
        })
    }
    } catch (error) {
        console.log(error);
        res.json({
            error: {
                message: error.message
            }
        })
    }

})

mongoose.connect('mongodb://127.0.0.1:27017/blogapp')
    .then(() => console.log("db connected!"))
    .catch((err) => console.log(err.message));

app.listen(5775, () => {
    console.log("Server started")
})