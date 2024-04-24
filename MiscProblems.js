https://leetcode.com/problems/excel-sheet-column-number/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions
var titleToNumber = function(columnTitle) {
    if(columnTitle === "") return null
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let alphaMap = {}
    for(let i = 0; i < abc.length; i++){
        let letter = abc[i];
        alphaMap[letter] = i+1
    }
    if (columnTitle.length < 1) return alphaMap[columnTitle]

    let multiplier = columnTitle.length-1;
    let sum = alphaMap[columnTitle[columnTitle.length-1]]
    for(let i = 0; i < columnTitle.length-1; i ++){
        pos = alphaMap[columnTitle[i]]
        let amount = 26**multiplier*pos
        sum+= amount;
        multiplier --;
    }
    return sum

};
