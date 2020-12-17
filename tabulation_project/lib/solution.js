//tabulation
function stepper(nums) {
    table = new Array(nums.length).fill(false);
    table[0] = true; //having seed values, will show u de way. You can use this as a starting point to iterate through ur table.

    for(let i = 0; i < nums.length; i++){
        if (table[i] == true){
            for(let j = 0; j <= nums[i]; j++){
                table[i+j] = true;
            }
        }
    }

    return table[table.length - 1]
}
//memoization
function stepper(nums, memo={}) {
    if(nums.length in memo) return memo[nums.length] //here you want to store nums.length as the key instead of nums, 
    //b/c it will reduce the length of the key by avoiding passing in all the numbers in a large array 
    //or using an array as a key. 
    if (nums.length === 0) return true
    let maxVal = nums[0]
    for (let i = 1; i < maxVal; i++){
        if (stepper(nums.slice(i), memo)) {
            memo[nums.length] = true
            return true
    }
    memo[nums.length] = false      
    return false
}

//tabulation
function maxNonAdjacentSum(nums) {

    if (nums.length === 0) return 0;
    
    temp = new Array(nums.length).fill(0);
    
    temp[0] = nums[0];
    for(let i = 1; i < nums.length; i++){
        
        safeNum  = (temp[i - 2] === undefined) ? 0 : (temp[i - 2] + nums[i]);
        prevNum = temp[i - 1];
        temp[i] = Math.max(safeNum, prevNum)
    }
        return temp[temp.length - 1]
    }

}
//memoization

function maxNonAdjacentSum(nums, memo = {}) {
    if(nums.length in memo) return memo[nums.length]
    if (nums.length === 0) return 0;

    let firstEle = nums[0];

    memo[nums.length] = Math.max(firstEle + maxNonAdjacentSum(nums.slice(2)), maxNonAdjacentSum(1)) //either include or exclude neighbor
    return memo[nums.length]
}