// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {

}
let helper = function(node){
    if(!node) return -1;
    
    return Math.max(helper(node.left), helper(node.right)) + 1;
}

var isBalanced = function(root) {
    if(!root) return true;
    
    if (Math.abs(helper(root.left) - helper(root.right)) > 1) return false;
    return (isBalanced(root.left) && isBalanced(root.right))
};
