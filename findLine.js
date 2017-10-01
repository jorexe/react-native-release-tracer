let line = parseInt(process.argv[2]);
let column = parseInt(process.argv[3]);
console.log(`Looking for line:${line} column:${column}`);
var sourceMap = require('source-map');
var fs = require('fs');

var sourcemap = JSON.parse(fs.readFileSync('source.map', 'utf8'));

var smc = new sourceMap.SourceMapConsumer(sourcemap);

console.log(smc.originalPositionFor({
  line,
  column
}));