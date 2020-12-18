function numRegions(graph) {
    let count = 0; 
    let visited = new Set();

   for (let node in graph){
        if(helper(node, graph, visited)) count++; 
   }

    return count;
}
function helper(node,graph,visited) {
    if(visited.has(node)) return false;
    
    visited.add(node);
    graph[node].forEach((neighbor) => helper(neighbor,graph,visited))
    return true;
}

module.exports = {
    numRegions
};