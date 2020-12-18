function treeHeight(root) {
    if(!root) return -1;

    let height = 0;
    let max = 0;

    let stack = [root];
    while(stack.length){
        let node = stack.pop()
        if(node.left) {
            stack.push(node.left)
        } else {
            if(height > max) max = height;
            height = 0;
        }
        if(node.right) stack.push(node.right)
        height += 1;
    }
}


module.exports = {
    treeHeight
};