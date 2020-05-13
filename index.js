const fs = require('fs');

const txtIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(txtIn);

const textOut = `This is what we know the avocado: ${txtIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!')