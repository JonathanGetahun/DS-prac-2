function maxValue(node, visited=new Set()) {
    if(visited.has(node.val)) return node.val;
    visited.add(node.val);

    let maxVal = node.val;
    node.neighbors.forEach(neighbor => {
        maxVal = Math.max(maxVal, maxValue(neighbor, visited));
    })

    return node.neighbors.length === 0 ? node.val : maxVal;
}

module.exports = {
    maxValue
};