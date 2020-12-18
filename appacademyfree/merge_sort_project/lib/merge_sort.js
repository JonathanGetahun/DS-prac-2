function merge(array1, array2) {

    let merged = [];
    
    while(array1.length || array2.length){

        let firstVal = array1.length ? array1[0] : Infinity;
        let secondVal = array2.length ? array2[0] : Infinity;

        let next; 
        if (firstVal < secondVal) { 
            next = array1.shift();
        } else if(secondVal <= firstVal){ 
            next = array2.shift();
        }

        merged.push(next)
    }

    return merged;
}

function mergeSort(array) {
    if (array.length <= 1){
        return array;
    }

    let firstHalf = Math.floor(array.length / 2);
    let leftArray = array.slice(0,firstHalf);
    let rightArray = array.slice(firstHalf);

    let finalLeft = mergeSort(leftArray);
    let finalRigth = mergeSort(rightArray);

    return merge(finalLeft,finalRigth)
}

module.exports = {
    merge,
    mergeSort
};