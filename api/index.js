const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const bcryptSalt = bcrypt.genSaltSync(16);
const jwtSecToken = 'fftatygdwwko';

mongoose.connect(process.env.MONGO_URL)
app.post("/register", async (req, res) => {
  const {name, email, password} = req.body;
  try{
    const userDetail = await User.create({
      name,
      email,
      password:bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDetail)
  } catch (e) {
    res.statusCode(422).json(e)
  }
});

app.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const userDetail = await User.findOne({email})
  if (userDetail) {
    const isMatched = bcrypt.compareSync(password, userDetail.password);
    if (isMatched) {
      jwt.sign({email: userDetail.email, id: userDetail._id}, jwtSecToken, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json(userDetail)
      })
    } else {
      res.status(422).json('Password didn\'t match')
    }
  } else {
    res.status(422).json('User not found');
  }
})

app.get("/profile", (req, res) => {
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecToken, {}, async (err, userData) => {
      if (err) throw err;
      const {name, email, _id} = await User.findById(userData.id)
      res.json({name, email, _id})
    })
  } else {
    json(null)
  }
})

app.listen(9000);