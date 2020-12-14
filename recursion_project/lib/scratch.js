//     0-dimensional array: 'some data'
//     1-dimensional array: ['some data']
//     2-dimensional array: [['some data']]
//     3-dimensional array: [[['some data']]]
function flatten(data) {
    //check if array, if no make it into array and return 
    if (!Array.isArray(data))  {
        console.log("reached???",[data])
        return [data]
    }

    //have a for loop that runs through array and check fo mini array
let x = data.reduce((total, val) => {
        if (Array.isArray(val)) {
            total = total.concat(flatten(val))
        } else {
            total = total.concat(val)
        }
        return total
    }, [])
    return x
}

console.log(flatten(['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]))