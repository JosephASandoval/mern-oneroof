const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");

/// socket.io inconjunction with Express
const http = require("http").Server(app);
const io = require("socket.io")(http);
const Message = require("./models/Message");
//

const users = require("./routes/api/users");
const houses = require("./routes/api/houses");
const posts = require("./routes/api/posts");
const chores = require("./routes/api/chores");
const expenses = require("./routes/api/expenses");
const invitations = require("./routes/api/invitations");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const User = require("./models/User");
const passport = require("passport");
const path = require("path");
const images = require("./routes/api/images"); // upload
// const { Socket } = require("dgram");

// tell our server to load the static build folder in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// app config
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

// db config
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// api backend routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// routers
app.use("/api/images", images);
app.use("/api/users", users);
app.use("/api/houses", houses);
app.use("/api/posts", posts);
app.use("/api/invitations", invitations);
app.use("/api/chores", chores);
app.use("/api/expenses", expenses);

//socket.io
io.on("connection", (socket) => {
  // Get the last 10 messages from the database.
  Message.find()
    .sort({ createdAt: -1 })
    .limit(10)
    .exec((err, messages) => {
      if (err) return console.error(err);

      // Send the last messages to the user.
      socket.emit("init", messages);
    });

  // Listen to connected users for a new message.
  socket.on("message", (msg) => {
    // Create a message with the content and the name of the user.
    const message = new Message({
      content: msg.content,
      name: msg.name,
    });

    // Save the message to the database.
    message.save((err) => {
      if (err) return console.error(err);
    });

    // Notify all other users about a new message.
    socket.broadcast.emit("push", msg);
  });
});

http.listen(port, () => {
  console.log("listening on *:" + port);
});
//
