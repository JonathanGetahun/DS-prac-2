// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

//My Submission
var climbStairs = function(n) {
    let table = new Array(n + 1).fill(0);
    table[1] = 1;
    table[2] = 2;
    
    for (let i = 3; i <= n; i++){
        table[i] = table[i - 1] + table[i-2];
    }
    
    return table[n];
    
}