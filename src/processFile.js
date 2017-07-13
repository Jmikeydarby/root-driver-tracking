// Takes a read file and processes the data to return an object containing accumulated trips for each driver

const processFiles = (inputFile) => {

  const addDriver = (driverArr) => {
    if (driverArr.length !== 2) {
      error = true;
      return;
    }
    let driverName = driverArr[1];
    dataObject[driverName] = {
      timeDriving: 0.00,
      distance: 0.00
    }
  };

  const addTrip = (tripArr) => {
    if (tripArr.length !== 5 || dataObject.hasOwnProperty(tripArr[1]) === false) {
      error = true;
      return;
    }
    let [command, driverName, startTime, endTime, distance] = tripArr;
    startTime = convertTime(startTime);
    endTime = convertTime(endTime);
    // Checks for errors from convertTime and miles must be in format ##.#
    if (startTime === "error" || endTime === "error" || /\b\d{1,}\.\d{1,}\b/.test(distance) === false) {
      error = true;
      return;
    }
    distance = parseFloat(distance);
    // Round to the nearest Hundredths
    let timeDriving = Math.round((endTime - startTime)*100)/100;
    let mph = (distance / timeDriving);
    //Ignore any trips going over 100 or under 5 MPH
    if (mph > 100 || mph < 5){
      return;
    }
    // Math.round here is a bugfix to make SURE that they always are rounded to the nearest hundredths.  Javascript Math can be clunky some times....  0.33+0.5 would equal 0.8300000000000001
    dataObject[driverName].timeDriving = Math.round((dataObject[driverName].timeDriving + timeDriving)*100)/100;
    dataObject[driverName].distance = Math.round((dataObject[driverName].distance + distance)*100)/100;
  };

  let dataObject = {
    input: inputFile
  };

  let arrOfLines = inputFile.data.split('\n');
  let error = false;
  for(let i = 0; i < arrOfLines.length && error === false; i++){
    let arrOfWords = arrOfLines[i].split(' ');
    switch (arrOfWords[0]) {
      case "Driver":
        addDriver(arrOfWords);
        break;
      case "Trip":
        addTrip(arrOfWords);
        break;
      case "":
        break;
      default:
        error = true;
        break;
    }
  }
  if (error === true) {
    dataObject.error = new Error("Not a valid input File");
  }

  return dataObject;
}

const convertTime = (time) => {
  // Must be in format HH:MM
  if (/\b\d{2}:\d{2}\b/.test(time)){
    let [hours, minutes] = time.split(":");
    return parseInt(hours) + Math.round((minutes / 60)*100)/100;
  }else {
    return "error";
  }
}

module.exports = processFiles;
