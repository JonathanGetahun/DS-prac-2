// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
    let table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;

    coins.forEach(val => {
        for (let amt = 0; amt < table.length; amt++){
            for (let qty = 0; qty * val <= amt; qty++){
                remainder = amt - qty * val;
                console.log("amt", amt, "qty", qty, "remainder", remainder)
                let attempt = table[remainder] + qty;
                console.log("amt", amt, "qty", qty, "remainder", attempt)
                if (attempt < table[amt]) table[amt] = attempt;
                console.log("table", table)
            }
        }
    });

    return table[table.length - 1]

}

console.log(minChange([1, 2, 5], 11))