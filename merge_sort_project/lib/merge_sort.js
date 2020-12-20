function merge(array1, array2) {
    let merge = [];

    while(array1.length || array2.length){
        let arr1 = array1[0] ? array1[0] : Infinity;
        let arr2 = array2[0] ? array2[0] : Infinity;

        let next;
        if (arr1 < arr2){
            next = array1.shift();
        } else {
            next = array2.shift();
        }
        merge.push(next);
    }
    return merge;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let midpoint = Math.floor(array.length/2);
    let left = array.slice(0, midpoint);
    let right = array.slice(midpoint);

    leftSort = mergeSort(left);
    rightSort = mergeSort(right);

    return merge(leftSort, rightSort);
}

module.exports = {
    merge,
    mergeSort
};