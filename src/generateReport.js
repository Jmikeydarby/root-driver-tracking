// Takes a processed report or errored input and prints a report of all data to the screen.


const generateReport = (reportData) => {
  let input = reportData.hasOwnProperty("input") ? reportData.input : reportData;
  if (input.fileNotFoundErr !== null) {
    console.log(`\nInput: ${input.loc}\n\n${input.loc} could not be found.  Please use a valid pathname relative to the current folder.\n`)
  } else if (reportData.hasOwnProperty("inputerror")){
    console.log(`\nInput: ${input.loc}\n\n${input.loc} was of invalid format.  Please correct any invalid formatting in the input file before attempting to generate another report\n`)
  } else {
    let objKeys = Object.keys(reportData);
    let driverReports = [];
    objKeys.forEach(keyName => {
      if (keyName !== "input") {
        driverReports.push(createDriverReport(keyName, reportData[keyName]));
      };
    })
    driverReports.sort((val1, val2) => {
      return val2[1] - val1[1];
    })
    console.log(`\nInput: ${input.loc}\n`);
    for(let i = 0; i < driverReports.length; i ++) {
      let report = driverReports[i];
      console.log(`${report[0]}: ${report[1] > 0 ? `${report[1]} miles @ ${report[2]} mph` : `${report[1]} miles`}`);
    }
  }

}

const createDriverReport = (driverName, totalTripObj) => {
  const mph = Math.round(totalTripObj.distance / totalTripObj.timeDriving);
  return [driverName, Math.round(totalTripObj.distance), mph]
}

module.exports = generateReport;
