const fs = require("fs");

fs.readFile("data.txt", (err, data) => {
  if (err) {
    throw err;
  }

  let arrayData = data.toString().split("\n");
  console.log(arrayData);
  // console.log(arrayData.replace(' ', '_'))
  let newArray = arrayData.map((item) => item.trim().replaceAll(" ", "_"));
  console.log(newArray);
  console.log("============================");
  console.log("============================");
  console.log("============================");
  console.log("============================");
  console.log("============================");

  const result = newArray.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  console.log(newArray.length);
  console.log(result.length);

  result.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  console.log(result);
});
