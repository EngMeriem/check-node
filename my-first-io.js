const fs = require('fs');

const contents = fs.readFileSync(process.argv[2], 'utf8');
const lines = contents.toString().split('\n').length - 1;
console.log(lines);