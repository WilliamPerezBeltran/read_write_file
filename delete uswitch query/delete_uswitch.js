const fs = require("fs");

fs.readFile("uswitch_delete.txt", (err, data) => {
  if (err) {
    throw err;
  }
  let bigString = "";
  let arrayData = data.toString().split("\n");
  //bigString += `\'${value.split('pts')[0].split('|')[0]}\',`
  arrayData.forEach(function (value, index) {
    bigString += `\'${value.split("pts")[0].split("|")[0]}\',`;
  });
  console.log(
    `DELETE FROM tariffs_uswitchdailyranking WHERE ranking_at in (${bigString});`,
  );
});
