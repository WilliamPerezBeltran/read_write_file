const fs = require("fs");

fs.readFile("data.txt", (err, data) => {
  if (err) {
    throw err;
  }

  let arrayData = data.toString().split("\n");
  console.log(arrayData);
  // console.log(arrayData.replace(' ', '_'))
  let newArray = arrayData.map((item) => {
    let data = item.trim().replaceAll(" ", "_").toLowerCase();
    return (data += "\n");
  });
  console.log(newArray);
  console.log("============================");
  console.log("============================");
  console.log("============================");
  console.log("============================");
  console.log("============================");

  const result = newArray.reduce((acc, item) => {
    return (acc += item);
  }, "");

  console.log("-----------result");
  console.log(result);
  console.log(result);
  console.log(result);
  console.log(result);
  console.log(result);
  console.log(result);

  data = result;
  const fileName = "data.txt";

  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.error("error writing to the file", error);
      return;
    }
    console.log("file `${fileName}` has been created with the data ");
  });
});
