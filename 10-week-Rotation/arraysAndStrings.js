/*******************************
 * Iteration
 ********************************/
// --- Part one ------
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

var moveZeroes = function(nums) {
    let secondArr = new Array(nums.length);
    let pointer = 0
    let endPointer = nums.length-1
    for(let i = 0; i < nums.length; i++){
        if(nums[i]) {
            secondArr[pointer] = nums[i];
            pointer ++;
        }else{
            secondArr[endPointer] = 0;
            endPointer --;
        }

    }
    for(let i = 0; i < secondArr.length; i++){
        nums[i] = secondArr[i]
    }

};
