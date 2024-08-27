const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQ3NTAxODF9.6MVrpw7QYVGMrwN_FpoZYc0bUTjFXdgxsx0TXzyq0r0
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmNkOWQ1OTQxNTRkMGZiZGEyNzVkY2QiLCJpYXQiOjE3MjQ3NTExOTN9.kA1TSE4htC3mSX-EV8TvfAUw7_PtjBmwvOU_o6XVdAE
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQ3NTEyNTB9.QDrQnSH6T5dVAmGIFIlpkS12q_nYIVgHsfy6STwPRIc
const router = express.Router();

//all schemas
const signupSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  username: zod.string().email(),
  password: zod.string(),
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

const updateSchema = zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
  password: zod.string().optional(),
});

//all routes
router.post("/signup", async (req, res) => {
  const body = req.body;
  const success = signupSchema.safeParse(body);
  if (!success) {
    return res.status(411).json({ message: "Invalid data" });
  }

  const user = await User.findOne({ username: body.username });
  if (user) {
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
  const existingUser = await User.findOne({
    username: body.username,
    password: body.password,
  });

  if (existingUser) {
    const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET);
    res.json({ message: "User logged in successfully", token: token });
  } else return res.status(411).json({ message: "Error while logging in" });
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne(
    {
      _id: req.userId,
    },
    req.body
  );

  res.json({
    message: "Updated successfully",
  });
});

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
