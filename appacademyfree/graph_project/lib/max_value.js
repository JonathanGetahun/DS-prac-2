
function maxValue(node, visited=new Set()) {
    
    if(visited.has(node)) return node.val;
    let max = node.val;

    visited.add(node)
    node.neighbors.forEach((test) => {
        let temp = maxValue(test, visited);
        if(temp > max) max = temp;
    })

    return max; 
}

module.exports = {
    maxValue
};