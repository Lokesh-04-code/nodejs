const os = require("os");
//innfo about currennt user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`the system uptime ${os.uptime()} seconds`);

const currentos = {
  name: os.uptime(),
  release: os.release(),
  totalmen: os.totalmem(),
  freemen: os.freemem(),
};
console.log(currentos);
