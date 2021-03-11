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

/**
 * LeetCode 62 - Unique Paths - Medium
 */
//Used Tabulation to solve, it was pretty simple. Remember to pass array by reference when creating multi-dimmensional arrays.
var uniquePaths = function(m, n) {
    let grid = new Array(m).fill().map(() => new Array(n).fill(0));

    
    for (let row = 0; row < m; row++){
        for (let col = 0; col < n; col++){
            grid[row][col] = 1;
            if (grid[row - 1] && (grid[row - 1][col] + grid[row][col - 1]) > grid[row][col]){
                grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
            }
        }

    }
    return grid[m - 1][n - 1]
};

/**
 * HackerRank - Ransom Note - Easy
 */
//Kind of struggled with updating object value, I need to remember each key is unique and if I try to add one with same name 
//it overwrites, and doesn't add an additional key, value pair. Very obvious 
//Using logical operators simplifies a lot.
function checkMagazine(magazine, note) {
    let repeat = {}
    magazine.forEach(val => repeat[val] = (repeat[val] || 0) + 1);
    let contains = note.every(word => repeat[word]--);
    
    console.log(contains ? "Yes" : "No")
 }

 /**
  * HackerRank - Save the Prisoner! - Easy
  */
 //Struggled for a bit, I tried using a for loop, but would time out. I changed my tactic to solving with a mathematical
 //approach and used modules (amazing things - I love remainders!).

 function saveThePrisoner(n, m, s) {
    if (s + (m - 1) <= n) return s + (m - 1)
    let over = s + (m - 1);
    if (over % n === 0) return n
    return over % n;
}
//I then reduced to
function saveThePrisoner(n, m, s) {
    let over = s + (m - 1);
    if (over % n === 0) return n
    return over % n;
}

//then a nice one liner (not as fast as above though)
function saveThePrisoner(n, m, s) {
    return ((s + (m - 1)) % n) || n;
}

/**
 * HackerRank - Staircase - Easy
 */
//Not too challenging, spent most of my time trying to find another way of doing brute force. Maybe recursively.
//However, I learned about str.repeat() and str.padStart()

function staircase(n) {
    let str = "";
    let hashStr = "";
    
    for (let i = 1; i <=n; i++){
        for (let j = 1; j <= n - i; j++){
            str += " "
        }
        hashStr += "#";
        console.log(str+hashStr);
        str = "";
    }
}


/**
 * LeetCode 200 - Number of Islands - Medium
 */
//Kept being afraid to use a nested for loop because of the time complexity being (O(n * m))
//also spent a long time not realizing that I need to pass grid into all the recursive call (OBVIOUS)
//
//DFS - because you can see the calls are going down deep in one direction. (using recursive call stack)
function numIslands(grid) {
    const H = grid.length;
    const W = H && grid[0].length;
    let count = 0;
    
  
    for (let r = 0; r < H; r++) {
      for (let c = 0; c < W; c++) {
        if (grid[r][c] === '0') continue;
        
        count++;
        dfs(r, c, grid, H, W);
      }
    }
    return count;
    
  }
  
    function dfs(r, c, grid, H, W) {
      if (r < 0 || c < 0 || r === H || c === W) return;
      if (grid[r][c] === '0') return;
      
      grid[r][c] = '0';
      dfs(r-1, c, grid);
      dfs(r+1, c, grid);
      dfs(r, c-1, grid);
      dfs(r, c+1, grid);
    }

/**
 * HackerRank - Bigger is greater - medium
 */
//spent waaay too much time on this problem. Need to revisit for a more optimal and shorter code. 
//even though I think it is O(n), maybe I can shorten syntax. I learned you can compare strings directly to each other
//to see which is greater based off of their UTF-16 values. And that lexicographically is the comparison of strings 
//alphabetical order.
function biggerIsGreater(w) {
    let firstHalf = '';
    let secondHalf = '';
    let completed = '';
    for (let i = w.length - 1; i >= 0; i--){
        if(w[i] > w[i - 1]){
            firstHalf = w.slice(0,i - 1);
            let lastLetter = w.slice(i-1,i);
            secondHalf = w.slice(i);
            if (secondHalf.length === 1){
                completed = firstHalf+secondHalf+lastLetter.split('').reverse().join('');
                break;
            } else {
                for (let j = secondHalf.length - 1; j >= 0; j--){
                    if (secondHalf[j] > lastLetter){
                        let switched = secondHalf[j];
                        firstHalf += switched;
                        secondHalf = secondHalf.substring(0,j) + lastLetter + secondHalf.substring(j+1);
                        completed = firstHalf + secondHalf.split('').reverse().join('');
                        break;
                    }
                } 
            }
            break;
        }
    }
    if (completed === '') return 'no answer'
    return completed
}

/*
LeetCode 350 - Intersection of Two Arrays II - easy
*/
var intersect = function(nums1, nums2) {

    let checker = {};
     let result = [];
     for(let i = 0; i < nums1.length; i++){
         checker[nums1[i]] = (checker[nums1[i]] || 0) + 1;
     }
     
     for(let i = 0; i < nums2.length; i++){
         if(checker[nums2[i]]){
             result.push(nums2[i])
             checker[nums2[i]] = checker[nums2[i]] - 1;
         }
     }
     
     return result
    
     
 };

 /**
  * LeetCode 122 - Best Time to Buy and Sell a Stock  II - easy
  */
 var maxProfit = function(prices) {
    let min = prices[0];
    let diff = 0;
    let result = 0;
    for(let i = 1; i < prices.length; i++){
        
        if(prices[i] < min) min = prices[i];
        if(prices[i] - min > diff) {
            diff = prices[i] - min
        }else{
            result += diff;
            diff = 0;
            min = prices[i];
        }
        
    }
    
    if(diff > 0) result += diff;
    return result
    
};

/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.

Sample Input:

student_course_pairs_1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}



Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"],
]

Sample output:

find_pairs(student_course_pairs_2) =>
{
  "0,42": []
  "0,9": []
  "9,42": []
}



n: number of student,course pairs in the input
s: number of students
c: number of courses being offered

*/

"use strict";

const studentCoursePairs1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"]
];

const studentCoursePairs2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"]
];




function findPairs(courses){
  let shared = {}
  courses.forEach(val =>{
    
  })
  courses.forEach(val => {
    shared[val[0]] = ([val[1]]) 
  })
  
  courses.forEach(val => {
    shared[val[0]] = shared[val[0]].concat([val[1]]);
  })
  
  let result = {}
  for(let id in shared){
    let share = []
    for(let id2 in shared){
      if(id !== id2 && result[`${id2},${id}`]){
         share = shared[id].filter(val => {
          return shared[id2].includes(val)
        })
      }
      let rem = new Set(share)
      
      share = []
      for(let x of rem){
        share = share.concat(x)
      }
      result[`${id},${id2}`] = share
    }
  }
  console.log(result)
  return shared
}

findPairs(studentCoursePairs2)  
findPairs(studentCoursePairs1)
/**

hash map 

hash map 1 = [
student Id: [courses, course2],

  

]

for loop hash map1
for each student id:
  for loop has map 1
    final courses = .filter()
    result.push(`${id1},{id2}`:[final courses])
result = 
[
"id,id": [course1,course2]
]

*/

/**
 * Hackerrank - Counting Valleys - easy
 */
function countingValleys(steps, path) {
  let seaLevel = 0;

  let valley = false;
  let amount = 0;
  for (let letter of path){
      if(letter === 'U') seaLevel += 1;
      else seaLevel -= 1; 
      
      if(seaLevel < 0) valley = true;
      if(seaLevel >= 0 && valley === true) {
          amount++;
          valley = false;
      }
  }

  return amount;
}

/**
 * HackerRank - Electronics-shop - easy
 * 
 * An O(n log (n)) way could have been to have kb descending and drives ascending, and just checking up until
 * where kb - drives is > b, then move kb.
 */
function getMoneySpent(keyboards, drives, b) {
  let max = 0;
  
  keyboards.forEach(key => {
      drives.forEach(drive => {
          if (key + drive <= b && key + drive > max){
              max = key + drive;
          }
      })
  })
  return max || -1
}

/**
 * https://www.geeksforgeeks.org/minimum-number-of-manipulations-required-to-make-two-strings-anagram-without-deletion-of-character/
 * 
 * Had a lot of trouble with javascript syntax with Map and for...of, and also getting
 * a clear idea by thinking ahead. I kept trying to use the total. 
 */

let s1 = "ddcf";
let s2 = "cedk";

function manipulation(s1,s2){
    let sum = 0;

    let checker = new Map();

    for (let i = 0; i < s1.length; i++){
        const val = (checker.get(s1[i]) || 0) + 1;
        checker.set(s1[i], val)
    }
    // console.log(checker)
    // for (let i = 0; i < s2.length; i++){
    //     let val = (checker.get(s2[i]) || 0);
    //     if(checker.has(s2[i])) 
    //     {
    //         val = val - 1
    //         checker.set(s2[i],val )
    //     } else checker.set(s2[i],++val)
    // }
    console.log(checker)
    for (let i = 0; i < s2.length; i++){
        if(checker.has(s2[i])){
            val = checker.get(s2[i]) - 1;
            checker.set(s2[i],val);
        }
    }
    for (let str of checker){
        console.log(str)
        sum += str[1];
    }

    return sum;
}

/**
 * LEETCODE 114. Flatten Binary Tree to Linked List - Medium
321 <-- insertion order

forgot that you can use a variable to point to a node, to keep track and use it later.

left []
right []

if (node.left) left.push(node.left)
if (node.right) right.push(node.right)    

leftval = left.length > 0 ? left.shift() : null
if(leftval) node.left = null & node.right = leftval
*/

//iterative
var flatten = function(root) {
  if(!root) return null;
  let node = root;
  let left = [node.left];
  let right = [node.right];
  
  while(left.length || right.length){
      let val = left.length > 0 ? left.shift() : right.pop();
      node.left = null;
      node.right = val;
      
      if(!val) continue
      node = val;
      

      if(val.left) left.push(val.left);
      if(val.right) right.push(val.right);
  }

};