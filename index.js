// fs is a file system module built into node
const fs = require('fs');

/* process.argv is a node variable containing an array of all commands typed after the program start command in the command line.
The first argument will the location of the executable of node, the second will be the location of the file you have executed
Example: Node start test1 test2 test4
process.argv would be [ '/usr/bin/nodejs', 'the/loc/of/the/file', 'test1', 'test2', 'test4' ]
*/
for(let i = 2; i < process.argv.length; i++){
  let val = process.argv[i];
  try {
    let data = fs.readFileSync(val, "utf8")
    console.log(val, data);
  } catch (err) {
    console.log(err);
    console.log(`${val} is not a valid file location`)
  }
}
