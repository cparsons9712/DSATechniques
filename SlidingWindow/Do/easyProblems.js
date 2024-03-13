/********************************************************************************
643. Maximum Average Subarray I
https://leetcode.com/problems/maximum-average-subarray-i/description/

Here left and right point to the index number of the array, but I use high and low
to indicate the value at that location. I use an if block to check that the first
set is added into the sum so that I can keep all of my calculations inside of one
singular loop.
Initially I had failed a test case because I set highestAvg to 0 instead of -infinity,
I failed a different one because I wasn't checking for the edge case of an array holding
only one value and I had a bug where I forgot to make Math.max override highestAvg.
*********************************************************************************/
var findMaxAverage = function (nums, k) {
  let currentSum = 0;
  let highestAvg = -Infinity;
  let left = 0;
  if (nums.length === 1) return nums[0].toFixed(5);
  for (let right = 0; right < nums.length; right++) {
    // add the new number into the windows sum
    let highVal = nums[right];
    currentSum += highVal;
    // when we have moved far enough in the loop that we can start calculating averages
    // right is right plus 1 to account for indexes starting at 0
    if (right + 1 >= k) {
      // calculate current average
      let currAvg = currentSum / k;
      // Save the curr avg if its higher then the record holding avg
      highestAvg = Math.max(currAvg, highestAvg);
      // remove the oldest number from windows sum and move left pointer over one
      let lowVal = nums[left];
      currentSum -= lowVal;
      left++;
    }
  }
  return highestAvg.toFixed(5);
};

/********************************************************************************
1652. Defuse the Bomb
https://leetcode.com/problems/defuse-the-bomb/description/

Initially we use if else statements to direct the code for each possible K type.
We get the first sum out of the loop and save it into a preallocated result array.
We also go ahead and remove the amount that the window is moving away from to prepare
for the loop since the first thing the loop does is add a value.

*********************************************************************************/
var decrypt = function(code, k) {

  //case 1: k is 0; return array filled with zeros
  let resArr = new Array(code.length).fill(0)
  if (k === 0) return resArr;

  //case 2: K is positive; currentNum should be sum of next k chars
  if(k > 0){
      let currPos = 0;
      let sum = code.slice(1,k+1).reduce((a,b)=>a+b) //get the first sum (from 1 to k)
      resArr[0] = sum // save the first result
      currPos++; // move curr to 1
      sum -= code[1] //remove the old value from the sum
      while (currPos < code.length){
          let newIndex = (currPos + k )% code.length //new position is k away- restarting at 0 when out of space
          sum += code[newIndex]// add in the new amount
          resArr[currPos] = sum// save the value in result array
          sum -= code[currPos+1]// remove oldest amount
          currPos++;// move curr
      }
      return resArr

  //case 3: K is negative
  }else{
      //results[0] would be the last k elements in the array added together
      let sum = code.slice(code.length+k, code.length).reduce((a,b)=> a+b)
      resArr[0] = sum
      sum -= code[code.length+k]// remove the oldest to prepare for loop

      for(let currPos = 1; currPos < code.length; currPos++){
          sum+= code[currPos-1] // add new number into sum
          resArr[currPos] = sum // save the result
          let oldPos = (code.length+k +currPos) % code.length // get the index for the oldest amount in sum
          sum -= code[oldPos] // remove oldest num from sum
      }
      return resArr;
  }
};

/********************************************************************************
2379. Minimum Recolors to Get K Consecutive Black Blocks
https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/

*********************************************************************************/
var minimumRecolors = function(blocks, k) {
  let minWhite = k; // worst case is we have all white blocks
  let currWhite = 0; // keep track of running sum

  for (let i = 0; i < blocks.length; i++){
      if(blocks[i] === 'W') currWhite++; // high part of window
      if(i >= k-1){ // Subtract 1 because index 0 is included
          minWhite = Math.min(minWhite, currWhite)  //update high score if need be
          if(blocks[i-k+1] === 'W') currWhite--; // low part of window
      }
  }
  return minWhite
};
