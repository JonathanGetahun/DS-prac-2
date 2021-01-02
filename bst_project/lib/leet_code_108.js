// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {

}
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    if(nums.length === 1) return new TreeNode(nums[0]);
    
    let midPoint = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[midPoint]);
    
    let left = nums.slice(0,midPoint);
    let right = nums.slice(midPoint + 1)
    
    node.left = left ? sortedArrayToBST(left) : null;
    node.right = right ? sortedArrayToBST(right) : null;
    
    return node;
};