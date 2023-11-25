const { default: mongoose } = require("mongoose");
const momgoose = require("mongoose");
momgoose.connect("mongodb://0.0.0.0:27017/API");
const nameSchema = new mongoose.Schema({
  name: String,
  title: String,
});
const saveInDB = async () => {
  const PracticeModel = mongoose.model("practices", nameSchema);
  let data = new PracticeModel({ name: "rahul", title: "swain" });
  const result = await data.save();
  console.log(result);
};
// saveInDB();
const updateInDB = async () => {
  const info = mongoose.model("practices", nameSchema);
  let data = await info.updateOne(
    { name: "deepak" },
    {
      $set: { title: "gouda" },
    }
  );
  console.log(data);
};
// updateInDB();
const deleteInDB = async () => {
  const info = mongoose.model("practices", nameSchema);
  const data = await info.deleteOne({ name: "deepak" });
  console.log(data);
};
// deleteInDB();

const readInDB = async () => {
  const info = mongoose.model("practices", nameSchema);
  const data = await info.find({});
  console.log(data);
};
readInDB();
