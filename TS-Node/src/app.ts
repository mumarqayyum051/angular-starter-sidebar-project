import express from "express";

const app = express();
import "dotenv/config";

const port: any = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
