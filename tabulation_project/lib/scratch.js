// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
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

console.log(stepper([3, 1, 0, 5, 10]))