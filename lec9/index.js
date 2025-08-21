const express = require("express")
const fs = require("fs");

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

// app.post('/user', (req, res) => {
//     res.send("This is my webpage.")
// })

app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  console.log('Received data:', name, age);
  res.send(`Hello, ${name}. You are ${age} years old.`);
  fs.readFile("./submitted-data.txt", "utf-8", function(err1, data1) {
    if (err1) return console.log
  })
  fs.writeFile("./submitted-data.txt", JSON.stringify(req.body), function(err) {
      if (err) return console.log(err);
      console.log("done!!");
  })
});


app.listen(3000, function() {
    console.log("server started");
});