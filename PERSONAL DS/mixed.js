/** 
LeetCode 144 - Binary Tree Preorder Traversal - Medium
*/

//Figured out on own

//Big O should be O(n) since it is touching each node (I think??)
//iterative
var preorderTraversal = function(root) {
    let result = [];
    let stack = []
    stack.push(root)
    
    while (queue.length) {

        let node = stack.pop();
        
        if (node !== null) {
        result.push(node.val);
        stack.push(node.right);
        stack.push(node.left);// had some trouble visualizing, didn't put node.right before node.left for a while
        }

    }
    return result; 
};

//recursive
//kept making the mistake of NOT REMEMBERING CONCAT RETURNS AN ARRAY/DOESN'T MODIFY THE OG ARRAY. So i had to push!! Then I made it 
//shorter
var preorderTraversal = function(root) {  
     if(!root) return [];
     return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
 };




 /**
  * Leetcode 654 - Maximum Binary Tree - Medium
  */

  //Got it on first try 
  //**remember that Math.max is slower than doing a normal for loop to find max
  
  //Big O Time complexity is Best case: O(n log(n)) 
  //Worst case: O(n^2) -> this is if the tree is not balanced ant all the maximum values are on one side like a linked list,
  //we lose that log(n) that we get from having it split into two branches

 var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) return null;
    if (nums.length === 1) return new TreeNode(nums[0]);
    let max = Math.max(...nums);
    
    let node = new TreeNode(max);
    let mid = nums.indexOf(max);
    let leftHalf = nums.slice(0, mid);
    let rightHalf = nums.slice(mid+1);
    
    node.left = constructMaximumBinaryTree(leftHalf);
    node.right = constructMaximumBinaryTree(rightHalf);
    
    return node
    
};



/**
 * HackerRank Coin Change Problem - medium
 */

 //Took me a LOOOONG time to get it, even though I've done something similar in past
 //**You can use for loop variables to navigate, not everything has to be done inside of it*/
 //Solve recursively first and then memoize the solution


 //Big O would be O(S * n), where S is the amount(n) and n is the number of denominations(c.length), 
 //not really a worst case because it has to run through everything, O(S*n) is for all scenarios so S * n(for each coin) that would
 //be new and hasn't saved yet.

 function getWays(n, c, memo = {}) {
    if (`${n},${c}` in memo) return memo[`${n},${c}`]
    if (n === 0) return 1;
    
    let currentCoin = c[0];
    let total = 0
    for (let qty = 0; qty * currentCoin <= n; qty++){
        total += getWays(n - qty * currentCoin, c.slice(1), memo)
    }
    
    memo[`${n},${c}`] = total;
    return total;
}


//HackerRank - Diagonal Difference - easy
//first array is row, then col

function diagonalDifference(arr) {
    let len = arr.length; 
    let primary = 0;
    let secondary = 0;
    let col = 0;
    for (let row = 0; row < len; row++){
        primary += arr[row][col];
        col++;
    }
    col = len - 1;
    for (let row = 0; row < len; row++){
        
        secondary += arr[row][col];
                console.log(secondary, arr[row][col])
        col--;
    };
    
    let answer = Math.abs(primary - secondary);
    return answer
}