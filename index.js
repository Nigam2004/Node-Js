const express = require("express");
const studentInfoModel = require("./model/studentInfo");
require("./config");
const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  const data = studentInfoModel(req.body);
  const result = await data.save();
  res.send(result);
});

app.get("/list", async (req, res) => {
  const result = await studentInfoModel.find();
  res.send(result);
  // console.log(result);
});

app.delete("/delete/:_id", async (req, res) => {
  // console.log(req.params);
  const result = await studentInfoModel.deleteOne(req.params);
  res.send(result);
  // console.log(result);
});

app.put("/update", async (req, res) => {
  const result = await studentInfoModel.updateOne(
    { name: "kalu" },
    {
      $set: req.body,
    }
  );
  res.send(result);
  // console.log(result);
});

//serach APi
app.get("/search/:key", async (req, res) => {
  console.log(req.params);
  const result = await studentInfoModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { title: { $regex: req.params.key } },
      { job: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

app.listen(4000, () => {
  console.log("app listening on posrt 4000");
});
