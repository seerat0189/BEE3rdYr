const express = require("express");
const { m1, m2 } = require("./middleware/firstmiddleware");
const { m3 } = require("./middleware/pathlevel");
const app = express();
const userRouter = require("./routes/userRoutes")
app.use(express.static(__dirname + "/public"))
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(m1)
// app.use(m2)
app.use("/api/users", userRouter)

app.get("/health", m3, (req, res) => {
    console.log("running controller function")
    // next()
    res.json({
        status: "ok",
        message: "server running ok"
    })
})

app.use(m2)
app.get("/home", (req, res, next) => {
    console.log("running home endpoint")
    res.json({
        success: true,
        message: "welcome to home page"
    })
})

app.listen(5775, () => {
    console.log("Server started")
})