const { readFileSync, writeFileSync } = require("fs");
const fs = require("fs");
HTMLFormControlsCollection.log("first");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync("./content/result.txt", `${first}, ${second}`, { flag: "a" });
console.log("done with the task");
console.log("starting the new one ");