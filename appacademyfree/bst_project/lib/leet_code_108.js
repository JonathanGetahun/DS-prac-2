// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


  
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
   }


var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
    let midIndex = Math.floor(nums.length / 2);
    
    let root = new TreeNode(nums[midIndex]);
    root.left = sortedArrayToBST(nums.slice(0,midIndex))
    root.right = sortedArrayToBST(nums.slice(midIndex + 1)) 
    console.log(root)
    return root
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));