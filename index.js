// Code your solution in this file!
// Returns the number of blocks from Scuber's headquarters to the pickup
// location. headquarters = 42[nd Street]
function distanceFromHqInBlocks(distance) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  return Math.abs(distance - 42);
}
// Returns the number of feet from Scuber's headquarters to the pickup
// location. You can use your distanceFromHqInBlocks function to help return
// the correct value here.
function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}
// Calculates the number of feet a passenger travels given a starting block and
// an ending block - it only calculates distance North and South
// (uptown/downtown). It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264;
}
// Given the same starting and ending block as the previous test (hint hint),
// return the fare for the customer. The first four hundred feet are free. For
// a distance between 400 and 2000 feet, the price is 2 cents per foot (not
// including 400, which are free!). Then Scuber charges a flat fare for a
// distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow
// any rides over 2500 feet - the function returns 'cannot travel that far' if
// a ride over 2500 feet is requested.
function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);

  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
