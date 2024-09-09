const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log("first", first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("second", second);
    writeFile(
      "./content/result.txt",
      `finally ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          result;
        }
        console.log(result);
        console.log("this task is done");
      }
    );
  });
});
console.log("starting the new task");
s;
