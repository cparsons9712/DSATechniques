# Leetcode Question bank

## Easy
### [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/description/)
- [x] An excellent example of using sliding window to find the subarray with the maximum/minimum average or sum, which is a very common pattern in sliding window problems.

### [1652. Defuse the Bomb](https://leetcode.com/problems/defuse-the-bomb/description/)
- [x] Directly applies sliding window to compute sums over a circular array, great for understanding the basic mechanics of sliding windows.

### [2379 Minimum Recolors to Get K Consecutive Black Blocks](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/)
- [ ] Illustrates the use of sliding window for optimizing a count over a fixed-length subarray.

### [1984 Minimum Difference Between Highest and Lowest of K Scores:](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/)
- [ ] Teaches how to apply sliding window on sorted data to find minimum range differences.

### [219 Contains Duplicate II:](https://leetcode.com/problems/contains-duplicate-ii/description/)
- [ ] Good for understanding how sliding window combined with hashing can track elements' presence within a specific range.



## Medium

### Find All Anagrams in a String (Problem 438):
- [x] https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
- Given two strings s and p, find all the start indices of p's anagrams in s.

1343 Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold: It's a straightforward application of the sliding window to find subarrays of a fixed size with an average that meets a certain criterion.

1004 Max Consecutive Ones III: This problem introduces the concept of handling binary data with a sliding window, allowing for a certain number of flips from 0 to 1, which is a common pattern in more advanced problems.

1438 Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit: It involves using a sliding window along with auxiliary data structures to maintain the maximum and minimum elements within the window, challenging the understanding of window dynamics.

209 Minimum Size Subarray Sum: This problem helps in understanding the sliding window's flexible size aspect, as it involves finding the minimal length subarray that exceeds a given sum.

904 Fruit Into Baskets: A variant of the "at most two distinct elements" problem that can be effectively solved using the sliding window, perfect for grasping the handling of elements' count within the window.


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

632 Smallest Range Covering Elements from K Lists: Enhances understanding of sliding windows across multiple arrays/lists.
992 Subarrays with K Different Integers: A complex application of sliding windows, ideal for mastering the handling of distinct elements within a subarray.
239 Sliding Window Maximum: Directly addresses the sliding window mechanism, perfect for learning to maintain window properties efficiently.
480 Sliding Window Median: Similar to the sliding window maximum but with the added complexity of median calculation, which requires sophisticated data structure support.
76 Minimum Window Substring: A quintessential problem for practicing the optimization of sliding windows in substring problems, involving character counts and hash mapping.
