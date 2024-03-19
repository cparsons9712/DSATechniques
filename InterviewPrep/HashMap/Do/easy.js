/*
1. Two Sum
https://leetcode.com/problems/two-sum/description/
HashMap/ Array
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


/*
217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/description/
*/
var containsDuplicate = function(nums) {
    let numsHash = {}
    for(let i = 0; i < nums.length; i++){
        let currNum = nums[i]
        if (numsHash[currNum] !== undefined) return true;
        numsHash[currNum] = 1;
    }

    return false
};
