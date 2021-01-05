function numRegions(graph) {
    let sum = 0;
    visited = new Set();
    for (let node in graph){
        sum += numRegionCheck(node, graph, visited)
    }

    return sum
}

var numRegionCheck = function(node, graph, visited){
    if (visited.has(node)) return 0;
    visited.add(node);

    let total = 1;
    graph[node].forEach(neighbor => {
        if (numRegionCheck(neighbor, graph, visited) == 0) total += 1;
        
    })

    return total;
}
module.exports = {
    numRegions
};