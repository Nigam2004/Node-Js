const mongoose = require("mongoose");
const studentInfoSchema = new mongoose.Schema({
  name: String,
  title: String,
  job: String,
});
const studentInfoModel = mongoose.model("practices", studentInfoSchema);
module.exports = studentInfoModel;
