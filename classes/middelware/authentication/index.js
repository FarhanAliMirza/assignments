const express = require("express");
const zod = require("zod");

const app = express();

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6)//minimum 6 characters
  // country: zod.literal("IN").or(zod.literal("US")),
});

app.use(express.json());

app.get("/login", (req, res) => {
  const response = schema.safeParse(req.body);
  if (!response.success) {
    res.status(400).json({ message: "Bad Request" });
  } else {
    res.json({ message: "You are logged in" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
