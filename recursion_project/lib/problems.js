// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
// Examples:
//
// lucasNumber(0)   // => 2
// lucasNumber(1)   // => 1
// lucasNumber(2)   // => 3
// lucasNumber(3)   // => 4
// lucasNumber(5)   // => 11
// lucasNumber(9)   // => 76
function lucasNumber(n) {
    if(n === 0) return 2;
    if ( n === 1) return 1;

    return lucasNumber(n - 1) + lucasNumber(n - 2)
}


// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// sumArray([4, 10, -1, 2]) // => 15
function sumArray(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];

    let n = array[0]
    return n + sumArray(array.slice(1))
}


// Write a function, reverseString(str), that takes in a string.
// The function should return the string with it's characters in reverse order.
//
// Solve this recursively!
//
// Examples:
// 
// reverseString("")            // => ""
//reverseString("c")           // => "c"
 //console.log(reverseString("internet"))   // => "tenretni"
// reverseString("friends")     // => "sdneirf"
function reverseString(str) {
    if (str.length === 0) return "";
    if (str.length === 1) return str[0]
    let n = str.slice(0,1)

    return reverseString(str.slice(1)) + n;
}


// Write a function, pow(base, exponent), that takes in two numbers.
// The function should calculate the base raised to the exponent power.
//
// Note: 
// A negative exponent can be calculate by taking the reciprocal of the positive exponent.
// That is, pow(2, -5) is equal to 1 / pow(2, 5)
// 
// Solve this recursively!
//
// Examples:
//
// pow(2, 0)    // => 1
// pow(2, 1)    // => 2
// pow(2, 5)    // => 32
// pow(3, 4)    // => 81
//  console.log(pow(2, -5))   // => 0.03125
function pow(base, exponent) {
    // if power is 0 return 1
    // otherwise return num
    let sum;
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    
    //if pow is -neg func
    if (exponent < 0){
        pos = Math.abs(exponent)
        sum = base * pow(base, pos - 1)
        return 1/sum
    } else {
        sum = base * pow(base, exponent - 1)
        return sum
    }

    
}


// A 1-dimensional array is also known as a flattened array.
// Write a method, flatten(data), that accepts a single argument. The
// method should take in an array of any dimension and return the flattened
// version of that array. Solve this recursively.
//   
// Hint:
//  - if the argument is not an array, then we have reached the base case
//  - look up the documentation for how to check if data is an array or not
//
// Examples:
//
// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// flatten(array_1)      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// flatten(array_2)      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
//
// flatten('base case')  // => [ 'base case' ]
//
// Another Hint:
//
// From the last example, you may be confused. We said that the method takes
// in an array as an arg, but we passed it a string?
// If data is not an array, then we can consider it as a 0-dimensional array.
//     0-dimensional array: 'some data'
//     1-dimensional array: ['some data']
//     2-dimensional array: [['some data']]
//     3-dimensional array: [[['some data']]]
function flatten(data) {
    //check if array, if no make it into array and return 
    if (!Array.isArray(data))  {
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

// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.
// 
// Example:
//
// let desktop = {
//     '/images': {
//         'app_academy_logo.svg': null,
//         '/parks': {
//             'yosemite.jpeg': null,
//             'acadia.jpeg': null,
//             'yellowstone.png': null
//         },
//         '/pets': {
//             'trixie_lou.jpeg': null,
//             'rolo.jpeg': null,
//             'opal.jpeg': null,
//             'diana.jpeg': null,
//         }
//     },
//     '/music': {
//         'hey_programmers.mp3': null,
//         '/genres': {
//             '/rock': {
//                 'everlong.flac': null,
//                 'livin_on_a_prayer.mp3': null
//             },
//             '/hip_hop': {
//                 'express_yourself.wav': null,
//                 'ny_state_of_mind.mp3': null
//             }
//         }
//     }
// };
//
// fileFinder(desktop, 'app_academy_logo.svg');     // => true
// fileFinder(desktop, 'everlong.flac');            // => true
// fileFinder(desktop, 'sequoia.jpeg');             // => false
function fileFinder(directories, targetFile) {
    //we have to check if it is an object
    // Object.prototype.toString.call(directories) === '[object Object]'
    let hold = []
    //1. we can check to see if its in current object
    //2. if not we can check to see if current key has object value recursively
    // if (directories === null) return false;
    for (let target in directories){
        if (directories[target] === targetFile || target === targetFile || fileFinder(directories[target], targetFile)) {
            hold.push(true)
        }
        hold.push(false)
    }
    return hold.includes(true)
}

// Write another function, pathFinder(directories, targetFile), that returns the path that contains the targetFile.
// If the targetFile is not found in the directories, then return null.
// You can assume the files are unique.
//
// Example using the same desktop from previously:
//
// pathFinder(desktop, 'trixie_lou.jpeg'));     // => '/images/pets/trixie_lou.jpeg'
// pathFinder(desktop, 'everlong.flac'));       // => '/music/genres/rock/everlong.flac'
// pathFinder(desktop, 'honeybadger.png'));     // => null
function pathFinder(directories, targetFile) {
    //after we find a match, recursive call to beginning gathers path
    //you want to return file dict(target) and the directory (target)
    //or
    //1. return file
    //2. return directory
    // if (Object.prototype.toString.call(directories) !== '[object Object]') return "";
    
    for (let key in directories){
        // if (directories[key] === targetFile) return str += `/${key}/${targetFile}`
        if (key === targetFile) return '/' + targetFile
            
            let currDir = pathFinder(directories[key], targetFile)
            if (currDir !== null) {
                return key + currDir
            }
        // if (Object.prototype.toString.call(directories[key]) === '[object Object]'){
        //     console.log("reached", pathFinder(directories[key, targetFile]))
        //      str += `"${key}"/${pathFinder(directories[key], targetFile)}`
        // }
    }

    return null;
}

module.exports = {
    lucasNumber,
    sumArray,
    reverseString,
    pow,
    flatten,
    fileFinder,
    pathFinder
};