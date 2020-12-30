function treeSum(root) {
    if(!root) return 0;

    let stack = [root];
    let counter = 0;
    while(stack.length){
        node = stack.pop();
        counter += node.val;

        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }

    return counter;
}


module.exports = {
    treeSum
};