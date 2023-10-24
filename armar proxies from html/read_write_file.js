const fs = require("fs");

fs.readFile("data_proxies.txt", (err, data) => {
  if (err) {
    throw err;
  }
  let newArray = [];
  let arrayData = data.toString().split("\n");
  arrayData.forEach(function (value, index) {
    if (value !== "------") {
      c = "";
      b = value.split("</td>")[0];
      // console.log( b)
      newArray.push(b);
    }
  });

  for (var i = 0; i < newArray.length; ++i) {
    if (i % 2 === 0) {
      console.log(`${newArray[i]}:${newArray[i + 1]}`);
    }
  }
});
