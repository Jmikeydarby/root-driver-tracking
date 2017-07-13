# Root Driver Report Generator

The goal of this application is to accept an input file via command line and output a report showing each driver, the distance they traveled, and their average speed.

This application is build in Node.js, so to initialize the application you may use this command line:
```
npm start path/to/file.txt fileName2.txt path/toFile3.txt ect
```

The application will accept any number of input files after 'npm start' and generate a report for each of them.  You may use the input files I have included or any input files you wish to add yourself.  
```
npm start input.txt tests/testinput.txt tests/testinput2.txt tests/testinput3.txt INVALIDINPUT.txt
```

Please be aware that the file path for your input file must be written in relation to THIS directory.  

Github: [https://github.com/Jmikeydarby/root-driver-tracking](https://github.com/Jmikeydarby/root-driver-tracking)

---

### Build Process

My main thought process for this application was to be modular, testable, and to handle any errors in the input file.  I understand that that the code will not be evaluated for handling any errors not mentioned in the problem statement.  I choose to still account for invalid input because the problem also asked me to create a solution that was representative of code I would write on a real project.  As such, throughout my project I have my code constantly confirming that all input I receive is in the format that I should expect it to be.  I also created several test files that contained invalid input to ensure that my code would catch the errors and handle them.

---
### Testing

I built the project with a Test-First mindset.  For each module in the project, I wrote the test specs first before writing the code.  I tried to create tests for the given situations I could encounter.  Tests are written using [Mocha](https://mochajs.org/)/[Chai](http://chaijs.com/api/bdd/) which are provided in the node_modules folder and listed in the Package.json.

To initiate tests:
```
npm test
```
