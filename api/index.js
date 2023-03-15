const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')
const bcrypt = require('bcryptjs');
require('dotenv').config()
const app = express();

app.use(express.json())
app.use(cors());

const bcryptSalt = bcrypt.genSaltSync(16)

mongoose.connect(process.env.MONGO_URL)
app.post("/register", async (req, res) => {
  const {name, email, password} = req.body;
  const userDetail = await User.create({
    name,
    email,
    password:bcrypt.hashSync(password, bcryptSalt),
  });

  res.json(userDetail)
});
app.listen(9000);