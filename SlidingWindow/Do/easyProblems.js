/********************************************************************************
643. Maximum Average Subarray I
https://leetcode.com/problems/maximum-average-subarray-i/description/
*********************************************************************************/
var findMaxAverage = function(nums, k) {
    let currentSum = 0
    let highestAvg= -Infinity
    let left = 0;
    if(nums.length === 1) return nums[0].toFixed(5)
     for(let right = 0; right < nums.length; right++){
             // add the new number into the windows sum
         let highVal = nums[right]
         currentSum += highVal;
             // when we have moved far enough in the loop that we can start calculating averages
         if (right+1 >= k){
                 // calculate current average
            let currAvg = currentSum/k
                 // Save the curr avg if its higher then the record holding avg
            highestAvg = Math.max(currAvg, highestAvg)
                 // remove the oldest number from windows sum and move left pointer over one
            let lowVal = nums[left]
            currentSum -= lowVal
            left++;
         }
     }
     return highestAvg.toFixed(5);
 };
