var fs = require('fs');
var contents = fs.readFileSync(process.argv[2], 'utf8');
var numOfCarriageReturns = contents.split('\n').length - 1;
console.log(numOfCarriageReturns);