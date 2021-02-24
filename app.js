const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const houses = require('./routes/api/houses')
const posts = require("./routes/api/posts");
const chores = require('./routes/api/chores')
const bodyParser = require("body-parser");
const User = require("./models/User");
const passport = require("passport");
const path = require("path");

mongoose
    .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {res.send('Hello World')});

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use('/api/houses', houses);

app.use("/api/posts", posts);
app.use('api/chores', chores);

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Server is running on port ${port}`)});

