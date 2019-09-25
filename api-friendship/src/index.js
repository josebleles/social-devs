const express = require('express');
const rotaUsers = require('./routes/user-route.js');
const authMiddle = require('./middlewares/authMiddle');

const app = express();
app.use(express.json());
app.use(authMiddle);

app.use(rotaUsers);

app.listen(3333);
  