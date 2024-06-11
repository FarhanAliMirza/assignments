const express = require("express");

const app = express();
const port = 3000;

function sumFromOneToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

app.get("/", (req, res) => {
  const n = req.query.n;
  const sum = sumFromOneToN(n);
  res.send("Hi your answer is " + sum);
});

app.post("/conversations", (req, res) => {
  //   console.log(req.headers["authorization"]);
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
