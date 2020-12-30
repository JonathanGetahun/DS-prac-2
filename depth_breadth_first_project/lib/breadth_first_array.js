function breadthFirstArray(root) {
    if(!root) return;

    let queue = [root];
    breadthArray = [];
    while(queue.length) {
        let node = queue.shift();
        breadthArray.push(node.val);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }

    return breadthArray;
}

module.exports = {
    breadthFirstArray
};