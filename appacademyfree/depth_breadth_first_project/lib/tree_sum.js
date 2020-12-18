// const {TreeNode} = require('./tree_node')
function treeSum(root) {
    if(!root) return 0;

    let sum = root.val;
    sum += treeSum(root.left);
    sum += treeSum(root.right);

    return sum;
}

// let a = new TreeNode(10);
// let b = new TreeNode(-4);
// let c = new TreeNode(3);
// let d = new TreeNode(6);
// let e = new TreeNode(2);
// let f = new TreeNode(2);
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// console.log(treeSum(a));


module.exports = {
    treeSum
};