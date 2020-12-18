function breadthFirstArray(root) {
    if(!root) return null;

    
    let queue = [root];
    let final = [];
    while(queue.length){
        let node = queue.shift();
        final.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return final;
}

module.exports = {
    breadthFirstArray
};