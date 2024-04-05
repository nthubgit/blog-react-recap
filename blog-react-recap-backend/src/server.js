import express from "express";

const app = express();

app.get("/hello", (req, res) => {
    res.send("Henlo!")
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000.");
});
