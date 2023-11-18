const DbConnect = require("./DbConnect");
const deletes = async () => {
  let db = await DbConnect();
  let res = await db.deleteMany({ name: "narayan" });
  console.log(res);
};

module.exports = deletes;
