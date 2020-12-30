function treeHeight(root) {
    if (!root) return -1;
    let node = root;
    if(!node.left && !node.right) return 0;

    let left = treeHeight(node.left) + 1;
    let right = treeHeight(node.right) + 1;

    return Math.max(left, right)
}

//their solution 
if (!root) return -1
return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))

//pretty elegant because it will give you -1 and +1 which will equal 0 if there is only one node.

module.exports = {
    treeHeight
};