# Sliding Window

## overview
- Imagine two shapes
    - a rectangle (the array or what have you)
    - a square (the window)
- slide the window over the rectangle looking for the best possible position
- at the end of the rectangle you stop

### dynamic sliding window
- the window can grow and shrink
- moves like a catapiller

## types of problems
- The input data is an array, linked list or string that we will iterate over
- Does the problem require looking at an adjoining subarray or substring that is sequential and in order?
- Is it asking for the subarray or substring to meet a specific condition? (min, max, longest, shortest, unique characters)

### Varients of questions
- fixed Length
    - max sum subarray of specific size
- Dynamic variant
   - smallest sum >= value
- Dynamic with auxillary data structure
    - longest substring with no more than k distinct characters
- String permutations
    - permutation = a way, especially one of several possible variations, in which a set or number of things can be ordered or arranged.

### Commonalities?
- Everything grouped sequentially
- longest / smallest / contains / max / min

# Leetcode Question bank
https://leetcode.com/tag/sliding-window/
