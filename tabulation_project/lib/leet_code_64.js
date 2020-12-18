// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

//MY SOLUTION
var minPathSum = function(grid) {
    let table = []
    grid.forEach(val => {
        table.push(new Array(val.length).fill(0))
    })
    
    for (let i = 0; i < table[0].length; i++){
        if(table[0][i-1] !== undefined){
            table[0][i] = grid[0][i] + table[0][i-1];
        }else{
            table[0][i] = grid[0][i];
        };
        
    };
    for (let j = 0; j < table.length; j++){
        if(table[j-1] !== undefined){
            table[j][0] = grid[j][0] + table[j-1][0];
        }else {
            table[j][0] = grid[j][0];
        }
        
    };
    
    for (let row = 1; row < grid.length; row++){
        for(let col = 1; col < grid[0].length; col++){

            let prevUp = table[row-1][col];
            let prevBack = table[row][col-1];
            table[row][col] = Math.min(prevUp, prevBack) + grid[row][col];
        };
    };

    return table[table.length - 1][table[0].length - 1];
};

console.log(minPathSum([[1,2,3],[4,5,6]]));
//console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))


