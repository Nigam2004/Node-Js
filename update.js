const DbConnect = require("./DbConnect");
const update = async () => {
  let db = await DbConnect();
  const res = await db.updateMany(
    { name: "Deepak", title: "Behera" },
    {
      $set: { name: "narayan", title: "das" },
    }
  );
  console.log(res);
};

module.exports = update;
