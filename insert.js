const DbConnect = require("./DbConnect");
const insert = async () => {
  const db = await DbConnect();
  const res = await db.insertMany([
    { name: "pabi", title: "swain" },
    { name: "haris", title: "gouda" },
  ]);
  console.log(res);
};
module.exports = insert;
