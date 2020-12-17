//tabulation
function stepper(nums) {
    let table = new Array(nums.length).fill(false)
    let temp = [...nums]

    for(let i = 0; i < temp.length; i++){
        let val = temp[i]
        for (let j = i; j <= val; j++){
            if(table[j] ===true || table[j]=== false) table[j] = true
        }
    }

    return !table.includes(false)
}


//tabulation
function maxNonAdjacentSum(nums) {
    // let table = new Array(nums.length).fill(0);  
    if(nums.length === 0) return 0
    let table = new Array(...nums)


    for (let i = 0; i < nums.length; i++){
        for ( let k = i + 2; k < nums.length; k++){
            let val = nums[i];
            for (let j = k; j < nums.length; j = j + 2){
                val += nums[j];
                if (val > table[j]) table[j] = val
            }
        val = 0
        }
    }

    return Math.max(...table)
}

//memoization
function maxNonAdjacentSum(nums, memo = {}) {
    if (nums.length === 0 ) return 0;
    if (nums in memo) return memo[nums];
    let total = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++){
        
        if(nums[i + 2]) {
            max = nums[i] + maxNonAdjacentSum(nums.slice(i + 2), memo)
        } else {
            max = nums[i]
        }

        if (total < max) total = max

    }   

    memo[nums] = total
    return total 
}

