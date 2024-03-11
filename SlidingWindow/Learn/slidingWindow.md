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
#### Maximum Average Subarray I (Problem 643):
- https://leetcode.com/problems/maximum-average-subarray-i/description/
- Find the contiguous subarray of a given length that has the maximum average value.

#### Subarray Product Less Than K (Problem 713):
Count the number of contiguous subarrays where the product of all the elements in the subarray is less than k.
#### Length of the Longest Substring with At Most Two Distinct Characters (Problem 159):
 Given a string s, return the length of the longest substring that contains at most two distinct characters.
#### Fruits into Baskets (Problem 904):
In a row of trees, the i-th tree produces fruit with type tree[i]. You can start at any tree and move to the right. You have two baskets, and your goal is to collect as many fruits as possible. However, you can only collect one type of fruit in each basket. What is the total amount of fruit you can collect?

### Medium
#### Find All Anagrams in a String (Problem 438):
- https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
- Given two strings s and p, find all the start indices of p's anagrams in s.

#### Minimum Size Subarray Sum (Problem 209):
Given an array of positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s.
#### Permutation in String (Problem 567):
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
#### Longest Substring Without Repeating Characters (Problem 3):
Given a string s, find the length of the longest substring without repeating characters.

### Hard
#### Minimum Window Substring (Problem 76):
Given two strings s and t, return the minimum window in s which will contain all the characters in t.
#### Sliding Window Maximum (Problem 239):
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position, return the max sliding window.




# Sources

https://leetcode.com/discuss/interview-question/3722472/mastering-sliding-window-technique-a-comprehensive-guide

<br>
Question Bank:
<br>
https://leetcode.com/discuss/study-guide/3630462/Top-20-Sliding-Window-Problems-for-beginners

<br>
