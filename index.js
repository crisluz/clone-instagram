const express = require("express");
const mongoose = require("mongoose");
const app = express();


mongoose.connect('',
{useNewUrlParser: true,
})

app.use(require('./routes'));

app.listen(3333);

