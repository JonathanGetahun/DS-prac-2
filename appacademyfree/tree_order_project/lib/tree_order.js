function inOrderArray(root) {
    if(!this.root) return;

    inOrderArray(root.left);
    console.log(root.value)
    inOrderArray(root.right);
}

function postOrderArray(root) {
    if(!this.root) return;
    postOrderArray(root.left);
    postOrderArray(root.right);
    console.log(root.val);
}


module.exports = {
    inOrderArray,
    postOrderArray
};