const express = require("express");
const zod = require("zod");
const {User} = require("../db");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");
const {authMiddleware} = require("../middleware");

const router = express.Router();

const signupSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  username: zod.string().email(),
  password: zod.string(),
});

const signinSchema = zod.object({  
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const success = signupSchema.safeParse(body);
  if (!success) {
    return res.status(411).json({ message: "Invalid data" });
  }

  const user = User.findOne({ username: body.username });
  if (user._id) {
    return res.status(411).json({ message: "User already exists" });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign({ userId: dbUser._id }, JWT_SECRET);
  res.json({ message: "User created successfully", token: token });
});

router.post("/signin", async (req, res) => {
  const body = req.body;
  const success = signinSchema.safeParse(body);
    if (!success) {
        return res.status(411).json({ message: "Error while loggin in" });
    }
  const user = User.findOne({ username: body.username });

});

module.exports = router;
