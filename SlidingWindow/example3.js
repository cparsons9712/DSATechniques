// Longest substring with K distinct characters

let findSubstring = (s, k) => {
    let start = 0;
    let maxLength = 0;
    let charFrequency = {};

    for (let end = 0; end < s.length; end++){
        const rightChar = s[end];
        if(!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;

        while(Object.keys(charFrequency).length > k){
            const leftChar = s[start];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0){
                delete charFrequency[leftChar]
            }
            start += 1;
        }
        maxLength = Math.max(maxLength, end - start +1)
    }
    return maxLength
}

console.log(findSubstring('AAAHHIBC', 2)) // 5
