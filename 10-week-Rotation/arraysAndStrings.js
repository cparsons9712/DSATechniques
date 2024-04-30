/*******************************
 * Day 1: Iteration
 ********************************/

// Problem 1: Move Zeroes
// non working solution:
var moveZeroes = function(nums) {
    let p1;
    let p2 = 0;
    while (p2 < nums.length){
        if(nums[p2] === 0){
            p1 = p2;
            while (nums[p2] === 0) p2++;
            [nums[p1], nums[p2] ]= [nums[p2], nums[p1]];
            p2 = p1+1
        }
        p2++;
    }

    return nums
};
