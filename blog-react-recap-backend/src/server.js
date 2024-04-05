import express from "express";

const app = express();
app.use(express.json());

app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send(`Henlo ${req.body.name}!`);
});

app.get("/hello/:name", (req, res) => {
  //const name = req.params.name;
  console.log(req.params);
  const { name } = req.params;
  res.send(`Greetings, ${name}!!`);
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000.");
});
