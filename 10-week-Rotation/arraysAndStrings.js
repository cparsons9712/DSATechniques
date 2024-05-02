/*******************************
 * Day 1: Iteration
 ********************************/
// two sum leetcode problem 1
var twoSum = function(nums, target) {

    let seen = {};
    for (i in nums){
        let num = nums[i];
        let compliment = target - num;
        if(seen[compliment]) return ([seen[compliment], i])
        if(!seen[num]) seen[num] = i;
    }
};


var merge = function(nums1, m, nums2, n) {
    m--;
    n--;
    let a = nums1[m]
    let b = nums2[n]
    let p = nums1.length-1;
    while (p >= 0){
        if(b === undefined || a > b ){
            nums1[p] = a;
            m--;
            a = nums1[m]
        }else{

            nums1[p] = b;
            n--;
            b = nums2[n]
        }
        p--;
    }
};
