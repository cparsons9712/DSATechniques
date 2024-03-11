
/********************************************************************************
Problem 1876. Substrings of Size Three with Distinct Characters
https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
*********************************************************************************/
var countGoodSubstrings = function(s) {
    let good = 0
    for(let high = 2; high < s.length; high++){
        if(s[high] !== s[high-1] && s[high] != s[high-2] && s[high-1] != s[high-2]) good++;
    }
    return good
};

/********************************************************************************
Problem 1876. Substrings of Size Three with Distinct Characters
https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
*********************************************************************************/
