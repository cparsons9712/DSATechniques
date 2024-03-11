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


