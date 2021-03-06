// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

//my solution 
//I didn't solve for the edge cases like amount = 0, coins[7]. 
var change = function(amount, coins, memo = {}) {
    if (coins.concat(amount) in memo) return memo[coins.concat(amount)]
    if(amount === 0 && coins.length === 0) return 1;
    let total = 0;
    
    coins.forEach((val, i) => {
        if(amount - val > 0) {
            total += change(amount - val, coins.slice(i), memo)
        };
        if(amount - val == 0) total += 1;
    });
    
    memo[coins.concat(amount)] = total;
    return total;
};

//given solution
var change = function(amount, coins, memo={}) {
    let key = amount + "-" + coins
    if (key in memo) return memo[key]
    if(amount == 0) return 1; 
    
    let currentCoin = coins[coins.length - 1];
    let total = 0;

    for(let qty = 0; qty * currentCoin <= amount; qty++){
        total += change(amount - qty * currentCoin, coins.slice(0, -1), memo)
    }

    memo[key] = total;
    return memo[key]
};