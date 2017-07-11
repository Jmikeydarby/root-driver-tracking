//These tests are for the command line input function via process.argv
const { expect } = require('chai');
const readFiles = require('../src/readFiles');

describe("ReadFiles:", () => {
  let testinputdata = {
    loc: 'tests/testinput.txt',
    data: 'Driver Rick\nTrip Rick 00:15 12:30 110.0\nDriver Morty\nDriver Summer\nTrip Morty 13:15 13:30 1.25\nTrip Morty 13:30 14:00 50.1\nTrip Summer 21:00 22:00 4.9\nTrip Summer 22:00 23:10 10\nTrip Summer 23:10 23:59 100\n',
    err: null
  }, testinput2data = {
    loc: 'tests/testinput2.txt',
    data: 'This is test 2\n',
    err: null
  }, testinput3data = {
    loc: 'tests/testinput3.txt',
    data: 'This is test 3 and it is a doooooozzzzzzy\n',
    err: null
  };
  it("Returns an empty array for no input", () => {
    expect(readFiles([])).to.deep.equal([]);
  });
  it("Reads a valid filename and returns an array containing the data", () => {
    let filedata = readFiles(['tests/testinput.txt']);
    expect(filedata).to.have.lengthOf(1);
    expect(filedata[0]).to.deep.equal(testinputdata);
  });
  it("Reads multiple valid files and returns an array containing all of the data", () => {
    let filedata = readFiles(['tests/testinput2.txt', 'tests/testinput.txt', 'tests/testinput3.txt']);
    expect(filedata).to.have.lengthOf(3);
    expect(filedata[0]).to.deep.equal(testinput2data);
    expect(filedata[1]).to.deep.equal(testinputdata);
    expect(filedata[2]).to.deep.equal(testinput3data);
  });
  it("Creates an object with an error if a file can not be found", () => {
    let filedata = readFiles(['invalidinput.txt']);
    expect(filedata[0].loc).to.equal('invalidinput.txt');
    expect(filedata[0].data).to.be.null;
    expect(filedata[0].err).to.not.be.null;
  });
  it("Can process valid and invalid data at the same time", () => {
    let filedata = readFiles(['tests/testinput.txt', 'invalidinput.txt', 'tests/testinput2.txt']);
    expect(filedata).to.have.lengthOf(3);
    expect(filedata[0]).to.deep.equal(testinputdata);
    expect(filedata[1].loc).to.equal('invalidinput.txt');
    expect(filedata[1].data).to.be.null;
    expect(filedata[1].err).to.not.be.null;
    expect(filedata[2]).to.deep.equal(testinput2data);
  })
})
