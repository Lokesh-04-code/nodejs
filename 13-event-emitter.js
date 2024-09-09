const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log("data recieved", name, id);
});

customEmitter.on("response", () => {
  console.log("data recttttttttieved");
});

customEmitter.on("response", () => {
  console.log("dawetata recieved");
});
customEmitter.on("response", () => {
  console.log("dataasdfgbhjkl recttttttttieved");
});
customEmitter.emit("response", "loke", 34);
