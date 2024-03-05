// smallest subarray that adds up to be equal or greater than the target number

const findSum = (array, sum) => {
    let minWindowSize = array.length
    let currentWindowSum = 0;
    let windowStart = 0;
    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){
        currentWindowSum += array[windowEnd]

        while(currentWindowSum >= sum){
            minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1)
            currentWindowSum -= array[windowStart];
            windowStart++;
        }
    }

    return minWindowSize;
}

console.log(findSum([1,4,3,7,3,1,4,3], 8))
