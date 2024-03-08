// Longest substring with K distinct characters

let findSubstring = (s, k) => {

    // initialize a start pointer, a result variable, and a hash map
    let start = 0;
    let maxLength = 0;
    let charFrequency = {};

    // initialize end pointer in the loop
    for (let end = 0; end < s.length; end++){

        // check to see if the newest character is in the hash map
        const rightChar = s[end];
        if(!(rightChar in charFrequency)) {

            // if its not in the hash map, add it
            charFrequency[rightChar] = 0;
        }

        // add one to the value for char in hash map
        charFrequency[rightChar] += 1;

        // check to see if we have too many unique characters and need to move the start pointer
        while(Object.keys(charFrequency).length > k){


            // first get the character at the start pointer
            const leftChar = s[start];
            // then remove one instance of it in the hash map
            charFrequency[leftChar] -= 1;
            // check if we removed all instances of it in the hash map
            if (charFrequency[leftChar] === 0){
                // if there are no instances delete the key
                delete charFrequency[leftChar]
            }
            // move the start pointer over one
            start += 1;
        }
        // now that we have moved the window over enough we check to see if this is a new record, and save it if it is
        maxLength = Math.max(maxLength, end - start +1)
    }
    return maxLength
}

console.log(findSubstring('AAAHHIBC', 2)) // 5
