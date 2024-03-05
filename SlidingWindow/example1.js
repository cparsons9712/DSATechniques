const maxSumSubarray = (array, len) => {
    
    let currentSum = 0

    // Create the first sum out of the first elements in the array
    for (let i = 0; i < len; i++){
        currentSum += array[i]
    }
    // set the first max to the first possible currentSum
    let maxValue = currentSum


    for(let i = len; i < array.length; i++){
        // add the new number, remove the oldest one
        currentSum += array[i] - array[i-len]

        // compare this group to the current highest sum and save the highest
        maxValue = Math.max(maxValue, currentSum)
    }
    return maxValue;
};

console.log(maxSumSubarray([1, 3, 4, 3, 6, 3, 10, 10, 10], 2));
