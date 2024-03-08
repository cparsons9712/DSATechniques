# Sliding Window

## overview

- The idea of sliding windows is to convert nested loops into a single loop
- It allows you to change the time complexity from O(n^2) or O(n^3) to O(n)
- A sliding window is a subarray
- As the loop progresses, we update the values in the subarray

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

### Varients of questions

#### Fixed Window

Predefined window size that remains constant
- Method to Solve:

  - Pointers: low and high indexes of the current window that adjust on each iteration
  - Template:

  ```
  Const fixedWindow = (arr, k) => {
      let low = 0;
      let high = 0;
      windowLength = k

      let i = 0
      while(i < arr.length){

          // STEP ONE: Create window that is one element smaller than desired window size by increasing the high pointer until the size is reached

          if (high - low +1 < windowLength){
              high++;


          } else {
              // STEP TWO: when window is large enough
              // A: Calculate the answer from the window
              // B: Increase the low pointer to remove oldest element
              // C: Move high pointer up by one to add new element to window
          }
      }
  }
  ```

#### 2 variable window
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
        // CASE 1: window needs to be bigger
            // k is the desired window size
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

### Commonalities?

- Everything grouped sequentially
- longest / smallest / contains / max / min

# Leetcode Question bank

https://leetcode.com/tag/sliding-window/

## Things I learned solving these problems

### Bitwise XOR

- The operator for bitwise XOR is ^
- Its used like a plus sign or multiplication sign
- You get it by adding binary numbers together, whenever you get two opposing signs you get a 1, any matching signs results in 0.
- Then you convert that number back into decimal
