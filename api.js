const express = require("express");
const DbConnect = require("./DbConnect");
const mongodb = require("mongodb");
const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  let data = await DbConnect();
  let result = await data.find({}).toArray();
  res.send(result);
});
app.post("/post", async (req, res) => {
  //   console.log(req.body);
  let data = await DbConnect();
  let result = await data.insertOne(req.body);
  res.send(result);
});
app.put("/put/:name", async (req, res) => {
  //   console.log(req.body);
  let data = await DbConnect();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(result);
});
app.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await DbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
//api create
