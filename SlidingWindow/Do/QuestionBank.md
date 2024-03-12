# Leetcode Question bank

## Easy
### 643. Maximum Average Subarray I
- [x] https://leetcode.com/problems/maximum-average-subarray-i/description/
- Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.


### 1763. Longest Nice Substring
- [ ] https://leetcode.com/problems/longest-nice-substring/description/
- A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not. Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

### 2269. Find the K-Beauty of a Number
- [ ] https://leetcode.com/problems/find-the-k-beauty-of-a-number/description/
- The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:
    - It has a length of k.
    - It is a divisor of num.
- Given integers num and k, return the k-beauty of num

### 2379. Minimum Recolors to Get K Consecutive Black Blocks
- [ ] https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/
- You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively. You are also given an integer k, which is the desired number of consecutive black blocks. In one operation, you can recolor a white block such that it becomes a black block. Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

### 1984. Minimum Difference Between Highest and Lowest of K Scores
- [ ] https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/
- Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized. Return the minimum possible difference.

### 219. Contains Duplicate II
- [ ] https://leetcode.com/problems/contains-duplicate-ii/description/
- Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k

### 2760. Longest Even Odd Subarray With Threshold
- [ ] https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/description/
- You are given a 0-indexed integer array nums and an integer threshold.
- Find the length of the longest subarray of nums starting at index l and ending at index r (0 <= l <= r < nums.length) that satisfies the following conditions:


## Medium

### Find All Anagrams in a String (Problem 438):
- [x] https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
- Given two strings s and p, find all the start indices of p's anagrams in s.

### 1234. Replace the Substring for Balanced String
- [ ] https://leetcode.com/problems/replace-the-substring-for-balanced-string/description/
- Return the minimum length of the substring that can be replaced with any other string of the same length to make s balanced. If s is already balanced, return 0.

### 2653. Sliding Subarray Beauty
- [ ] https://leetcode.com/problems/sliding-subarray-beauty/description/
- Given an integer array nums containing n integers, find the beauty of each subarray of size k. The beauty of a subarray is the xth smallest integer in the subarray if it is negative, or 0 if there are fewer than x negative integers

### 2461. Maximum Sum of Distinct Subarrays With Length K
- [ ] https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/
- You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:
    - The length of the subarray is k, and
    - All the elements of the subarray are distinct.

### 3. Longest Substring Without Repeating Characters
- [ ] https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
- Given a string s, find the length of the longest substring without repeating characters.

### 2841. Maximum Sum of Almost Unique Subarray
- [ ] https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/description/
- You are given an integer array nums and two positive integers m and k. Return the maximum sum out of all almost unique subarrays of length k of nums. If no such subarray exists, return 0. A subarray of nums is almost unique if it contains at least m distinct elements

### 2875. Minimum Size Subarray in Infinite Array
- [ ] https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/description/
- Return the length of the shortest subarray of the array infinite_nums with a sum equal to target. If there is no such subarray return -1.

### 2555. Maximize Win From Two Segments
- [ ] https://leetcode.com/problems/maximize-win-from-two-segments/description/
- Return the maximum number of prizes you can win if you choose the two segments optimally.


## Hard
### Minimum Window Substring (Problem 76):
- [ ]
- Given two strings s and t, return the minimum window in s which will contain all the characters in t.
### Sliding Window Maximum (Problem 239):
- [ ]
- Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position, return the max sliding window.

### 2156. Find Substring With Given Hash Value
- [ ] https://leetcode.com/problems/find-substring-with-given-hash-value/description/
- You are given a string s and the integers power, modulo, k, and hashValue. Return sub, the first substring of s of length k such that hash(sub, power, modulo) == hashValue.

### 2953. Count Complete Substrings
- [ ] https://leetcode.com/problems/count-complete-substrings/description/
- A substring s of word is complete if:
    - Each character in s occurs exactly k times.
    - The difference between two adjacent characters is at most 2. That is, for any two adjacent characters c1 and c2 in s, the absolute difference in their positions in the alphabet is at most 2.
- Return the number of complete substrings of word.

### 3013. Divide an Array Into Subarrays With Minimum Cost II
- [ ] https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/description/

- You need to divide nums into k disjoint contiguous subarrays, such that the difference between the starting index of the second subarray and the starting index of the kth subarray should be less than or equal to dist.

### 30. Substring with Concatenation of All Words
- [ ] https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
- Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

### 2781. Length of the Longest Valid Substring
- [ ] https://leetcode.com/problems/length-of-the-longest-valid-substring/description/
- You are given a string word and an array of strings forbidden. A string is called valid if none of its substrings are present in forbidden. Return the length of the longest valid substring of the string word. A substring is a contiguous sequence of characters in a string, possibly empty.

### 2902. Count of Sub-Multisets With Bounded Sum
- [ ] https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/description/
- Return the count of sub-multisets within nums where the sum of elements in each subset falls within the inclusive range of [l, r].
