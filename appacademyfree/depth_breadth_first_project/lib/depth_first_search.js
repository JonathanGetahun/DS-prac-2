
// const { TreeNode } = require('./tree_node');
function depthFirstSearch(root, targetVal) {
    // if(!root) return null;

    // let stack = [root];
    // while(stack.length){
    //     let node = stack.pop()
        
    //     if(node.val === targetVal) return node;

    //     if(node.right) stack.push(node.right);
    //     if(node.left) stack.push(node.left);
        
    // }
    // return null;

        //recursion
    if(!root) return null;

    if(root.val === targetVal) return root;
    let x = depthFirstSearch(root.left, targetVal);
    let y = depthFirstSearch(root.right, targetVal);

    if(x) {
        return x;
    } else if (y){
        return y;
    } else 
        return null;
}
// let a = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let d = new TreeNode('d');
// let e = new TreeNode('e');
// let f = new TreeNode('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(depthFirstSearch(a,"e"));

module.exports = {
    depthFirstSearch
};