// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if(array.length <= 2) return true;
    

    let parentIdx = Math.floor((array.length - 1) / 2)



    if (array[parentIdx] > array[array.length - 1]){
        return isMaxHeap(array.slice(0, array.length - 1))
    }
    
    return false
}


module.exports = {
    isMaxHeap
};