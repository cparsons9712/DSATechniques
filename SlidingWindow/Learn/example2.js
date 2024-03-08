// smallest subarray that adds up to be equal or greater than the target number

const findSum = (array, sum) => {

    // set the running winner of the smallest subarray to the largest possible answer AKA the length of the array
    let minWindowSize = array.length

    // initialize the value to hold the current windows result
    let currentWindowSum = 0;

    // initialize the start here and the end in the loop. end could also be initialized out of the loop as well
    let windowStart = 0;

    // start the loop
    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){

        // every loop will always add the next value into the running sum, the loop should reiterate whenever the current sum is smaller than target sum
        currentWindowSum += array[windowEnd]

        // check to see if we have gotten to the point where we would start doing calculations or adjustments, for this problem that would be when we get a large enough number that we would either save the length (matches sum) or make the subarray window smaller (greater than sum)
        while(currentWindowSum >= sum){

            // see if our subarray beats the currently saved winner (AKA is smaller than saved result)
            minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1)

            // remove the oldest value which is the one start is pointing to.
            currentWindowSum -= array[windowStart];
            
            // Move start pointer over one
            windowStart++;
        }
    }

    return minWindowSize;
}

console.log(findSum([1,4,3,7,3,1,4,3], 8))
