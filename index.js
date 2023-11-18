const DbConnect = require("./DbConnect");
const insert = require("./insert");
const update = require("./update");
const deletes = require("./delete");
insert();
update();
deletes();

const readdata = async () => {
  let res = await DbConnect();
  data = await res.find({}).toArray();
  console.log(data);
};
readdata();
