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


