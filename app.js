let _ = require("lodash");
let item = [1, [2, [3, 4]]];
let newitem = _.flattenDeep(item);
console.log(newitem);
