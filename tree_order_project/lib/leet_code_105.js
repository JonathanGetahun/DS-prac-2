// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 && inorder.length === 0) return null;
    
    let root = preorder[0];
    let rootNode = new TreeNode(root);
    let midIdx = inorder.indexOf(root);
    let left = inorder.slice(0, midIdx);
    let right = inorder.slice(midIdx + 1);
    
    let leftPre = preorder.filter((val) => left.includes(val));
    let rightPre = preorder.filter((val) => right.includes(val));
        
    rootNode.left = buildTree(leftPre, left);
    rootNode.right = buildTree(rightPre, right);
    
    return rootNode;
};
