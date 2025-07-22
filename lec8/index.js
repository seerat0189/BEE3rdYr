const express = require("express")

const app = express()

app.get('/', (req, res) => {
    // res.send('Hello World')
    // res.send("<h1>OK</h1>")
    // res.sendFile(__dirname + "/index.html") // absolute path
    // res.json({
    //     name: "Seerat",
    //     age: 20
    // })
    res.end("hi")
})

// query parameter
app.get("/watch", (req, res) => {
    let videoId = req.query.v;
    let nId = req.query.n;
    res.send("id gotten"+ " " + videoId + " " + nId)
})

// params
// putting : before v makes it changeable, if : is not put, the endpoint becomes static
app.get("/watch/:v/video/:n", (req, res) => {
    console.log(req.params.v)
    console.log(req.params.n)
    res.send("got it!!!!")
})

app.listen(4444, function() {
    console.log("server started")
});