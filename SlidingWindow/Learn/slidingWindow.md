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



# Sources

https://leetcode.com/discuss/interview-question/3722472/mastering-sliding-window-technique-a-comprehensive-guide

<br>
Question Bank:
<br>
https://leetcode.com/discuss/study-guide/3630462/Top-20-Sliding-Window-Problems-for-beginners

<br>
