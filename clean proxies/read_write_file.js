const fs = require("fs");

fs.readFile("data_proxies.txt", (err, data) => {
  if (err) {
    throw err;
  }

  let arrayData = data.toString().split("\n");
  arrayData.forEach(function (value, index) {
    a = value.split("-");
    console.log(a[1]);
  });
});
