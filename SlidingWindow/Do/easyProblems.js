/*
Things I learned:

- bitwise XOR = num1 ^ num2
- Leetcode beat time varies WILDLY with the exact same code
- % can be used to wrap around an array and get back to the start at the end


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

// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/submissions/1196227923/
var countGoodSubstrings = function(s) {
  // good = no repeated char & len of 3
  let goodCount = 0;
  for (let i = 3; i <= s.length; i++){
      let currentStr = s.substring(i-3, i)
     if (currentStr[0] != currentStr[1] && currentStr[1] != currentStr[2] && currentStr[0] != currentStr[2]) goodCount++
  }
  return goodCount

};

// https://leetcode.com/problems/defuse-the-bomb/description/
var decrypt = function(code, k) {
  let len = code.length
  let res = Array(len).fill(0)
  if(k === 0) return res;


  if(k > 0){
      let window = [];
      let pos = 0;
      for(let i = 1; i <= k; i++ ){
          window.push(code[i])
      }
      let sum = window.reduce((a, b)=> a+b)
      res[pos] = sum;
      pos++

       while (pos < len){
          window.shift()
          window.push(code[(pos+k)%len])
          sum = window.reduce((a, b)=> a+b)
          res[pos] = sum;
          pos++;
       }
  return res
  }else {
      let window = [];
      let pos = 0;
      for (let j = -1; j >= k; j--) {
          let index = (len + j) % len;
          window.push(code[index]);
      }
      let sum = window.reduce((a, b)=> a+b)
      res[pos] = sum
      pos++

      while(pos < len){
          window.pop()
          index = (pos - 1) % len
          window.unshift(code[index])
          let sum = window.reduce((a, b)=> a+b)
          res[pos] = sum
          pos++
      }
      return res


  }
};
