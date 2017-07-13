// These tests are to insure processFile.js is properly reading input files and confirming a valid input file.
const { expect } = require('chai');
const readFiles = require('../src/readFiles');
const processFile = require('../src/processFile');

describe.only("ProcessFiles:", () => {
  let testFile = readFiles(['tests/testinput.txt', 'tests/testinput2.txt']),
    validReturn = {
      input: testFile[0],
      "Rick": {
        timeDriving: 12.25,
        distance: 110.00
      },
      "Morty": {
        timeDriving: 0.25,
        distance: 1.25
      },
      "Summer": {
        timeDriving: 2.00,
        distance: 90.00
      }
    };
  // This test will also check if the file ignores invalid lines that are below 5mph or above 100mph since those are included in the test file.
  it("Reads each line of a valid report and returns an object representing accumulated data", () => {
    let returnedData = processFile(testFile[0]);
    expect(returnedData).to.deep.equal(validReturn);
  });
  // If the file isn't formatted correctly
  it("Returns an error file if the input file is not written correctly or invalid", () => {
    let returnedData = processFile(testFile[1]);
    expect(returnedData).to.have.ownPropertyDescriptor('inputerror');
    expect(returnedData.inputerror).to.be.an.instanceof(Error);
  });
});
