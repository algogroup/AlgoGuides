// PROBLEM: You are an art thief trying to maximize how much money you make in a heist.
//  The amount each painting in the gallery goes for is its value in an Array.
//   Howeveer if you steal two adjacent paintings an alarm will go off.
//    Whats the max value you can get from the heist?
// EXAMPLE:
//[3,5,6,2,1,8], the maximum heist value would be from 3,6,8 for a total of 17.

const artHeist = gallery => {
  let runningMaxTotal = [0, gallery[0]]; // start with 0, so you don't look to the left and get undefined
  for (let i = 1; i < gallery.length; i++) {
    runningMaxTotal[i + 1] = Math.max(
      gallery[i] + runningMaxTotal[i - 1],
      runningMaxTotal[i]
    ); //increment runningMaxTotal to include the maximum of either stealing or not stealing the next painting
  }
  return runningMaxTotal[gallery.length];
};


const artHeist2 = gallery => {
  let lastMax = 0; // pointer to the current max 
  let secondLastMax = 0; // pointer to last best combo
  gallery.forEach(artValue => {
    let tempLast = lastMax; 
    let tempSecondLast = secondLastMax;
    lastMax = Math.max(artValue + tempSecondLast, tempLast);
    // compare the last best combo to the current one
    secondLastMax = tempLast;
    // move our pointer to the new last best combo
  })
  return lastMax
}


