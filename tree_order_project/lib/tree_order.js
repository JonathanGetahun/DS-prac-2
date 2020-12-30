function inOrderArray(root) {
    if(root === null) return [];

    inOrderArray(root.left);
    console.log(root.val);
    inOrderArray(root.right);
}

function postOrderArray(root) {
    if(!root) return [];
    // JSON.parse(JSON.stringify(inOrderArray(root.left)));
    

    return [...postOrderArray(root.left), ...postOrderArray(root.right), root.val];
}


module.exports = {
    inOrderArray,
    postOrderArray
};