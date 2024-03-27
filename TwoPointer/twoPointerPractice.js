/*****************************************************
167. Two Sum II - Input Array Is Sorted
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
*******************************************************/
var twoSum = function(numbers, target) {
    let l = 0
    let h = numbers.length -1;
    while (l !== h){
        let sum = numbers[l] + numbers[h]
        if ( sum=== target) return [l+1, h+1]
        if(sum > target) h--;
        if (sum < target) l++;
    }
};

/*****************************************************
344. Reverse String
https://leetcode.com/problems/reverse-string/description/
*******************************************************/
var reverseString = function(s) {
    let start = 0;
    let end = s.length -1;
    while (end > start){
        [s[start], s[end]] = [s[end], s[start]]
        start++;
        end --;
    }
};

/*****************************************************
234. Palindrome Linked List
https://leetcode.com/problems/palindrome-linked-list/description/
*******************************************************/
var isPalindrome = function(head) {
    let arr = [];
    while (head){
        arr.push(head.val);
        head = head.next;
    }
    let s = 0;
    let e = arr.length-1;
    while (e > s){
        if (arr[s] !== arr[e]) return false;
        s++;
        e--;
    }
    return true;
};


/*****************************************************
2824. Count Pairs Whose Sum is Less than Target
https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/
*******************************************************/
var countPairs = function(nums, target) {
    sorted = nums.toSorted((a,b)=> a-b)
    let count = 0;
    let i = 0;
    let j = sorted.length-1;
    while (i < j){
        let low = sorted[i];
        let high= sorted[j];
        if (low + high < target){
            count += j -i;
            i++;
        }
        if (low+high >= target){
            j--;
        }
    }
    return count;

};
/*****************************************************
 844. Backspace String Compare
https://leetcode.com/problems/backspace-string-compare/description/
*******************************************************/
