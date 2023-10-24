const fs = require("fs");

fs.readFile("data_proxies.txt", (err, data) => {
  if (err) {
    throw err;
  }

  let arrayData = data.toString().split("\n");
  bigString = "";
  // console.log(arrayData)
  arrayData.forEach(function (value, index) {
    // console.log(`# ROTATING_PROXY_LIST = ['${[value]}']`)
    console.log(
      `https_proxy='${value}' OCTOPUS_ENV=development python2.7.9 -m scrapy crawl japan_enechange --set CLOSESPIDER_ITEMCOUNT=3000`,
    );
  });
  // bigString = `(${bigString})`

  // console.log(`DELETE FROM tariffs_uswitchdailyranking WHERE ranking_at in ${bigString};`)
});
