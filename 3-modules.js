// commonJS, every file is modulee (by  default)
// modules -Encapsulated code (only share minimum)
const names = require("./4-names");
const sayhi = require("./5-utils");
const data = require("./6-alternative-flavour");
const addvalues = require("./7-mind-grenade");
require("./7-mind-grenade");
console.log(sayhi);

sayhi("lokesh");
sayhi(names.john);
sayhi(names.peter);
addvalues();
