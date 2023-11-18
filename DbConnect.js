const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);
const dataBase = "API";

//data base connect with promise Method
// DbConnect().then((resp) => {
//   resp
//     .find({})
//     .toArray()
//     .then((res) => console.log(res));
// });
// console.log(DbConnect());

async function DbConnect() {
  let result = await client.connect();
  let db = result.db(dataBase);
  return db.collection("practice");
}
module.exports = DbConnect;
