// npm -global command , comes with the  node
// npm --version

//local dependency-use it only in the particularly project
//npm i<package Name>

//global dependency use it in any project
//npm install -g <packageName>
//sudo install -g <packageName>(mac)

//packagejson - manifest file (stores importat info about project/paackages)
//manuel pproach (create package.jsonn in the root  , create poperties etc )
//nnpm init (step by step ,press enter to skip)
//npm init -y (eveything defAULT)

const _ = require("lodash");
const items = [1, [2, 5, [3, 6, [4]]]];
const newitems = _.flattenDeep(items);
console.log(newitems);
console.log("this is lokesh");
