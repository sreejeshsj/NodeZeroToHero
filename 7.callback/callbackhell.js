const { log } = require("console");
const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    log(err);
    return;
  }
  log(data);

  const fetchedData = data.toUpperCase();

  fs.writeFile("output.txt", fetchedData, (err) => {
    if (err) {
      log(err);
      return;
    }
  });

  fs.readFile("output.txt", "utf-8", (err, d) => {
    if (err) {
      log("something");
      return;
    }

    log(d);
  });
});
