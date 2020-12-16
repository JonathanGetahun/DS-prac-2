function minChange(coins, amount, memo = {}) {
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

console.log(minChange([1, 5, 10, 25], 100))