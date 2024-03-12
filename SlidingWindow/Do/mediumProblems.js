/********************************************************************************
438. Find All Anagrams in a String
https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
*********************************************************************************/
var findAnagrams = function(s, p) {
    let res = []

    // fill a hashmap with counts of each character in p
    let pHash = {}
    for (let i = 0; i < p.length; i++){
        let char = p[i]
        if(!pHash[char]) pHash[char] = 0
        pHash[char] +=1;
    }
    let pKeys = Object.keys(pHash)
    windowHash= {}
    let startPointer = 0

    for(let i = 0; i < s.length; i++){
        let matching = false;
        // add new character into window's hash
        let char = s[i]
        if(!windowHash[char]) windowHash[char] = 0
        windowHash[char] += 1
        if(i+1 >= p.length){ //This part we will do once we have a large enough string to compare
             //compare the hashtables to see if they are the same
            let keyLength = Object.keys(windowHash).length
            if (keyLength == pKeys.length){
                matching = true;
                for(let key of pKeys){
                    if(pHash[key] !== windowHash[key]) matching = false // flip the toggle if any come up different
                }
            }
            //if(Object.keys(windowHash).length === pKeys.length){ //Dont even bother if they have a mismatched number of keys
           // }
            if(matching) res.push(startPointer)
            // remove the character leaving the window from hash
            let oldChar = s[startPointer]
            windowHash[oldChar] -= 1;
            if(windowHash[oldChar] === 0) delete windowHash[oldChar]
            startPointer++; // now move the pointer
            matching = true // and reset matching
        }
    }
    return res;
};
