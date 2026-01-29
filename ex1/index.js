const express = require("express");
const app = express();
const PORT = process.env.PORT || 3100;

function fibonacci(num) {
  if (num <= 1) {
    return num;
  }

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= num; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.json({
    name: "Dilan",
    lastName: "Villada",
    age: 23,
    country: "Colombia",
    city: "Medellin",
  });
});

app.get("/fibo/:nth", (req, res) => {
  const nth = req.params.nth;
  const result = fibonacci(nth);
  res.json({
    result,
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    error: "Route not found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
