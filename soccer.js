
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  //let arrayResult = result.split('');
  //console.log(`${arrayResult} result`);
  //console.log([result[0]]);
  //console.log(`${RESULT_VALUES[arrayResult[0]]} result value`);

  //console.log(RESULT_VALUES[result]);
  // returns array of numbers
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won
function getTotalPoints (...args) {
  let sum = 0;
  let stringArgs = String(args);
  //console.log(stringArgs);
  let arrayResult = stringArgs.split('');
  
  for (let arg of arrayResult) sum += getPointsFromResult(arg);

  return sum;
}


// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"
function orderTeams (...args) {

  for (let arg of args) {
    let points = getTotalPoints(arg.results);
    console.log(`${arg.name}: ${points}`);
  }

}


// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);

// should log the following to the console:
// Sounders: 7
// Galaxy: 4