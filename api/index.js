const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')
require('dotenv').config()
const app = express();

app.use(express.json())
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
app.post("/register", (req, res) => {
  const {name, email, password} = req.body;
  User.create({
    name,
    email,
    password,
  })
})
app.listen(9000);