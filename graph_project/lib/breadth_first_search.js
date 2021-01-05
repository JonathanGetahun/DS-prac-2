function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    let queue = [startingNode];
    while (queue.length)  {
        node = queue.shift();
        if(node.val === targetVal) return node;
        if(visited.has(node.val)) continue;
        visited.add(node.val);

        node.neighbors.forEach(neighbor => {
            queue.push(neighbor);
        })

    }

    return null;
}

module.exports = {
    breadthFirstSearch
};