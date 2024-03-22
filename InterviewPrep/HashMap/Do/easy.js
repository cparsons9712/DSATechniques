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

/*
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/description/
*/

var groupAnagrams = function(strs) {
    let map = {}
    for(let string of strs){
        let sorted = string.split('').sort().join('')
        if(map[sorted] === undefined) map[sorted] = [];
        map[sorted].push(string)
    }
    return Object.values(map)
};

/*
387. First Unique Character in a String
https://leetcode.com/problems/first-unique-character-in-a-string/description/
*/
var firstUniqChar = function(s) {
    const hash = {}
    for (let i = 0; i < s.length; i++){
        if (hash[s[i]] === undefined) hash[s[i]] = [i, 0];
        hash[s[i]][1] ++;
    }
    let lowestInx = null
    let keys = Object.keys(hash)

    for(let key of keys){
        let curr = hash[key]
        if(curr[1] === 1 && curr[0] === 0) return 0
        if(curr[1] === 1 && (!lowestInx || lowestInx > curr[0])){
            lowestInx = curr[0]
        }
    }
    return (lowestInx || -1)

};
