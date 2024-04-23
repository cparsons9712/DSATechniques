https://leetcode.com/problems/excel-sheet-column-number/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions
var titleToNumber = function(columnTitle) {
    if(columnTitle === "") return null
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let alphaMap = {}
    for(let i = 0; i < abc.length; i++){
        let letter = abc[i];
        alphaMap[letter] = i+1
    }
    if (columnTitle.length < 2) return alphaMap[columnTitle]

    let tens = alphaMap[columnTitle[0]] * 26
    let ones = alphaMap[columnTitle[1]]
    let total = 0
    for (let j = 0; j < columnTitle.length; j++){

    }

};
