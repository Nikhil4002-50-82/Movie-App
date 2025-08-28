import express from "express";

const app: express.Application = express();
const port: number = 3000;

app.get("/", (req, res) => {
  res.send("TypeScript With Express");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
