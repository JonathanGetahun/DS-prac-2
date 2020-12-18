function quickSort(array) {
    if (array.length <= 1){
        return array;
    }

    let pivot = array.shift()
    let left = array.filter(el => el <= pivot);
    let right = array.filter(el => el > pivot);

    let finalLeft = quickSort(left);
    let finalRight = quickSort(right);

    return [...finalLeft, pivot, ...finalRight]
}


module.exports = {
    quickSort
};