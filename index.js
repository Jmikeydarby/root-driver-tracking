//Initial file
const readFiles = require('./src/readFiles');

/* process.argv is a node variable containing an array of all commands typed after the program start command in the command line.
The first argument will the location of the executable of node, the second will be the location of the file you have executed
Example: Node start test1 test2 test4
process.argv would be [ '/usr/bin/nodejs', 'the/loc/of/the/file', 'test1', 'test2', 'test4' ]
*/
if (process.argv.length < 3) {
  throw new Error("No input file specified.  Please use 'npm start path/to/file/name.txt'");
}

const fileData = readFiles(process.argv.slice(2));

fileData.forEach( val => {
  if (val.err !== null) {
    console.log(`${val.loc} is not a valid input file or location`);
  } else {
    console.log(`${val.loc}: ${val.data}`)
  }
})
