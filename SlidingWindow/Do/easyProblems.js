/*
Things I learned:

- bitwise XOR = num1 ^ num2
- Leetcode beat time varies WILDLY with the exact same code


*/

var maximumStrongPairXor = function (nums) {
  // https://leetcode.com/problems/maximum-strong-pair-xor-i/
  nums.sort((a, b) => a - b);
  let maxXor = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (j < nums.length && nums[j] <= nums[i] * 2) {
      let currentXor = nums[i] ^ nums[j];
      maxXor = Math.max(maxXor, currentXor);
      j++;
    }
  }
  return maxXor;
};
