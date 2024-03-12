# Sliding Window

## overview

- The idea of sliding windows is to convert nested loops into a single loop
- It allows you to change the time complexity from O(n^2) or O(n^3) to O(n)
- A window is a subarray or substring
- As the loop progresses, we update the values in the subarray by adding the newest and removing the oldest. that means if we are keeping track of a sum we would += the new value and -= the value at the low pointer before moving it up

## Techniques

- Hash table
- Two pointers
- Combination
  - mix of using pointers to track the start and end of the window and a hash table to quickly look up values

## types of problems

- Typically, if your instinct is to use nested loops to solve a problem, thats a good indication that sliding windows would work to solve it.
- The input data is an array, linked list or string that we will iterate over
- Does the problem require looking at an adjoining subarray or substring that is sequential and in order?
- Is it asking for the subarray or substring to meet a specific condition? (min, max, longest, shortest, unique characters)
- Can the array possibly have negative numbers? Sliding window CANNOT be used in cases where there are negative windows in the array! Use cumulative sum instead.

### Varients of questions

#### Fixed Window

Predefined window size that remains constant
- Method to Solve:

  - Pointers: low and high indexes of the current window that adjust on each iteration
  - Template:

  ```
    const fixedWindow = (arr, k) => {
        let low = 0;
        let high = 0;
        let windowLength = k; // The fixed size of the window

        while (high < arr.length) {
            // STEP ONE: Expand the window by moving the 'high' pointer to the right.
            // The window grows until it is one less than the desired size.
            // This adjustment accounts for the addition of a new element before the next iteration.
            if (high - low + 1 < windowLength) {
                // Add logic here to process the element entering the window, if needed
                high++;
            } else {
                // STEP TWO: The window is now at the desired size.

                // A: Calculate and update the result based on the current window contents.
                //    This could involve summing elements, finding a minimum, etc.

                // Update logic for calculating results from the window here

                // B: Slide the window forward by one element.
                // This involves incrementing 'low' to remove the oldest element and 'high' to add a new element.
                if (high + 1 < arr.length) {
                    // Logic to remove the influence of the element exiting the window
                    low++;

                    // Logic to include the next element in the window
                    high++;
                } else {
                    // If there are no more elements to add, break the loop or adjust as needed
                    break;
                }
            }
        }

        // Include any post-processing or return statements here
    }
  ```

#### Variable window
The window size is NOT fixed and changes based on specefic criteria/ conditions
- Method to solve:
    - Use two pointers for start and end of window. They both start at index 0
    - Check the condition that determines the size of the window, if the window should grow move the end pointer up 1 to expand it
    - Once size condition is met perform specified operation on the window
    - Move the window by moving start pointer
- Template:
    ```
    let start = 0
    let end = 0


    while (end < n){
        // CASE 1: window needs to be bigger (k = desired window size)

        if (end - start + 1 < k){
            end++


        // CASE 2: window is appropriate size so we should do the calculations
        }else if(end - start + 1 == k){
            // problem specific calculations here
            // save answer to variable if need be
            end++


        // CASE 3: Window needs to be smaller
        // we adjust it smaller by moving start pointer until appropriate size
        } else if (end - start + 1 > k){
            while (end - start +1 > k){
                // Remove elements or calculations that represent the oldest element/ element at start pointer

                start++;
            }

            //after adjustments, check if its now the appropriate size
            if(end - start +1 == k){
                // perform calculations
                // save answer if called for
            }

            end++
        }
    }
    return answer
    ```
#### Using Pointers and Hashmap
    ```
    const complexWindow = (string, len) => {
        // initialize pointers, accumulator and hashmap

        // loop should continue until the high pointer reaches the end


            // Add the current value to the Map and expand the window by moving high pointer


            // Check the length of the window by subtracting low from high to see if its the right length

                // if there are additional constraints outside of window size (EX unique characters) check for it

                    // do the calculations

                // undo any changes that the item at low pointer has made (Example: subtract from sum or remove from map)

                // move the low pointer up one to move the window over

            }
        }
        // return the result
    }
    ```

### Commonalities?

- Everything grouped sequentially
- longest / smallest / contains / max / min

## Leetcode Question bank

### Easy
#### 643. Maximum Average Subarray I
- [x] https://leetcode.com/problems/maximum-average-subarray-i/description/
- Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.


#### 1763. Longest Nice Substring
- [ ] https://leetcode.com/problems/longest-nice-substring/description/
- A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not. Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

#### 2269. Find the K-Beauty of a Number
- [ ] https://leetcode.com/problems/find-the-k-beauty-of-a-number/description/
- The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:
    - It has a length of k.
    - It is a divisor of num.
- Given integers num and k, return the k-beauty of num

#### 2379. Minimum Recolors to Get K Consecutive Black Blocks
- [ ] https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/
- You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively. You are also given an integer k, which is the desired number of consecutive black blocks. In one operation, you can recolor a white block such that it becomes a black block. Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

#### 1984. Minimum Difference Between Highest and Lowest of K Scores
- [ ] https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/
- Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized. Return the minimum possible difference.

#### 219. Contains Duplicate II
- [ ] https://leetcode.com/problems/contains-duplicate-ii/description/
- Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k

#### 2760. Longest Even Odd Subarray With Threshold
- [ ] https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/description/
- You are given a 0-indexed integer array nums and an integer threshold.
- Find the length of the longest subarray of nums starting at index l and ending at index r (0 <= l <= r < nums.length) that satisfies the following conditions:


### Medium


#### Find All Anagrams in a String (Problem 438):
- [x] https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
- Given two strings s and p, find all the start indices of p's anagrams in s.

#### Fruits into Baskets (Problem 904):
- [ ] https://leetcode.com/problems/fruit-into-baskets/description/
- In a row of trees, the i-th tree produces fruit with type tree[i]. You can start at any tree and move to the right. You have two baskets, and your goal is to collect as many fruits as possible. However, you can only collect one type of fruit in each basket. What is the total amount of fruit you can collect?

#### Maximum Average Subarray I (Problem 643):
- [ ] https://leetcode.com/problems/maximum-average-subarray-i/description/
- Find the contiguous subarray of a given length that has the maximum average value.

#### Subarray Product Less Than K (Problem 713):
- [ ]
- Count the number of contiguous subarrays where the product of all the elements in the subarray is less than k.

#### Minimum Size Subarray Sum (Problem 209):
- [ ]
- Given an array of positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s.

#### Permutation in String (Problem 567):
- [ ]
- Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

#### Longest Substring Without Repeating Characters (Problem 3):
- [ ]
- Given a string s, find the length of the longest substring without repeating characters.

### 2401. Longest Nice Subarray
- [ ] https://leetcode.com/problems/longest-nice-subarray/



### Hard
#### Minimum Window Substring (Problem 76):
- [ ]
- Given two strings s and t, return the minimum window in s which will contain all the characters in t.
#### Sliding Window Maximum (Problem 239):
- [ ]
- Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position, return the max sliding window.

#### 2156. Find Substring With Given Hash Value
- [ ] https://leetcode.com/problems/find-substring-with-given-hash-value/description/
- You are given a string s and the integers power, modulo, k, and hashValue. Return sub, the first substring of s of length k such that hash(sub, power, modulo) == hashValue.

#### 2953. Count Complete Substrings
- [ ] https://leetcode.com/problems/count-complete-substrings/description/
- A substring s of word is complete if:
    - Each character in s occurs exactly k times.
    - The difference between two adjacent characters is at most 2. That is, for any two adjacent characters c1 and c2 in s, the absolute difference in their positions in the alphabet is at most 2.
- Return the number of complete substrings of word.



# Sources

https://leetcode.com/discuss/interview-question/3722472/mastering-sliding-window-technique-a-comprehensive-guide

<br>
Question Bank:
<br>
https://leetcode.com/discuss/study-guide/3630462/Top-20-Sliding-Window-Problems-for-beginners

<br>
