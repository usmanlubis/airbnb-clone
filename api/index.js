const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors());

app.post("/register", (req, res) => {
  const {name, email, password} = req.body;
  res.json({name, email, password})
})
app.listen(9000);