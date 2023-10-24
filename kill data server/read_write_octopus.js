const fs = require("fs");

fs.readFile("kill_data.txt", (err, data) => {
  if (err) {
    throw err;
  }
  // console.log(data.toString().split("\n"));

  let arrayData = data.toString().split("\n");
  // console.log(arrayData)
  console.log(arrayData[0].split("pts")[0]);

  arrayData.forEach(function (value, index) {
    console.log(`kill -9 ${value.split("pts")[0]}`);
  });
});
