const express = require("express");
const zod = require("zod");

const app = express();

const kidneysSchema = zod.array(zod.number());

app.use(express.json());

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (!(username === "farhan" && password === "helu")) {
    res.status(401).json({ message: "Unauthorised" });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const goodKidney = req.query.goodKidney;
  if (!(goodKidney == 1 || goodKidney == 2)) {
    res.status(400).json({ message: "Bad Request" });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.status(200).json({ message: "You are healthy" });
});

//Mnnual Validation
// app.post("/health-checkup", userMiddleware, (req, res) => {
//   const kidneys = req.body.kidneys;
//   // if(!(kidneys === 2)){
//   //   res.json({message: "Wrong Inputs"});
//   // }
//   // else{
//   //   const kidneyLength = kidneys.length;
//   //   res.json({message: `You have ${kidneyLength} kidneys`});
//   // }
// });

//global catches
// app.post("/health-checkup", userMiddleware, (req, res) => {
//   const kidneys = req.body.kidneys;
//   const kidneyLength = kidneys.length;
//   res.json({ message: `You have ${kidneyLength} kidneys` });
// });
// app.use(function(err, req, res, next) {
//   res.json({ message: "Internal Server Error" });
// })

app.post("/health-checkup", userMiddleware, (req, res) => {
  const kidneys = req.body.kidneys;
  const response = kidneysSchema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({ message: "Input is Invalid" });
  } else {
    const kidneyLength = kidneys.length;
    res.json({ message: `You have ${kidneyLength} kidneys` });
  }
  res.send(response);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
