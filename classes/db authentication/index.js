const express = require("express");
const mongoose = require("mongoose");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://farhanalimirza19:lA5XLb1GJa0ZwCoK@cluster0.cs5xmon.mongodb.net/users_app"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
  name: zod.string(),
});
async function userExists(email) {
  let userExists = false;
  if (await User.findOne({ email: email })) {
    userExists = true;
  }
  return userExists;
}

app.post("/signup", function (req, res) {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  userExists(email).then((exists) => {
    if (exists) {
      return res.status(403).json({
        msg: "User already exists",
      });
    } else {
      const response = schema.safeParse(req.body);
      if (!response.success) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        const user = new User({ name: name, email: email, password: password });
        user.save();
        return res.json({
          msg: "User created",
        });
      }
    }
  });
});

app.post("/signin", function (req, res) {
  const email = req.body.email;
  password = req.body.password;
  userExists(email).then((exists) => {
    if (!exists) {
      return res.status(403).json({
        msg: "User doesnt exist in our db",
      });
    } else {
      var token = jwt.sign({ email: email }, jwtPassword);
      return res.json({
        token,
      });
    }
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const email = decoded.email;
    return res.json({msg: "User exists"});
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
}); 

app.listen(3000);
