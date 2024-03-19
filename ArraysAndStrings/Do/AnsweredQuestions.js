/*
1. Two Sum
https://leetcode.com/problems/two-sum/description/
*/

var twoSum = function(nums, target) {

    let hash = {};
    for(let i = 0; i< nums.length; i++){

        let currentNum = nums[i]
        let compliment = target - currentNum

        if(hash[compliment] != undefined) return [i, hash[compliment]]
        hash[currentNum] = i

    }
};
