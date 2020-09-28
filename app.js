const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const download = require('download');
const fs = require('fs');
require("dotenv").config();
const {
  Message
} = require("./messegeModule");
const {
  Signin
} = require('./signinModule');

app.use(cors());

const PORT = process.env.PORT || 3002;
mongoose
  .connect("mongodb+srv://gal:1234@myrestapi.creen.mongodb.net/gal-react-web?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongoDB"))
  .catch((err) => console.log("Error: ", err));


app.use(express.json());


app.get('/',(req,res)=>{
  res.send('server is online and connect to db');
})

/// post a massage
app.post("/massage", async (req, res) => {
  let massage = new Message(req.body);
  console.log(massage);
  await massage.save();

  res.send("ok");
});

/// sign as manager
app.post('/sign-in', async (req, res) => {
  let manager = await Signin.findOne({
    userName: req.body.userName,
    password: req.body.password
  });

  if (!manager) {
    res.send(false);
  } else {
    res.send(true);
  }


})
//get all messages
app.get('/manager', async (req, res) => {
  let massages = await Message.find({});
  res.json(massages);

})

//delete message

app.delete('/manager/:id', async (req, res) => {
  await Message.deleteOne({
    _id: req.params.id
  });
  res.send("deleted")
})






app.listen(PORT, console.log("Server is running on port: " + PORT));