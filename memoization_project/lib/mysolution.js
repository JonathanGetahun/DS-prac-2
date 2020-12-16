
function lucasNumberMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n == 0) return 2;
    if (n == 1) return 1; 
    
    memo[n] = lucasNumberMemo(n-1, memo) + lucasNumberMemo(n-2, memo)
    return memo[n]
}

//My Solution
function minChange(coins, amount, memo = {}) {
    if (amount === 0) return 0
    //the target amount will be variable, start with largest coin
    if (coins.concat(amount) in memo) return memo[coins.concat(amount)]
    let min = coins.map(coin => {
        let val = 0;
        if (amount - coin === 0){ 
            val = 1
        } else if (amount - coin > 0){
             val = minChange(coins, amount - coin, memo) + 1
        } else {
             val = Infinity;
        }
        return val
    })
    
    let smallest = Math.min(...min)
    memo[coins.concat(amount)] = smallest
    return smallest

}

