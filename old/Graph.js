/**
 * Builds a directed graph based on the adjacency list
 * @constructor
 */
function Graph() {
    this.adjList = {}
}

/**
 * Add a new unconnected vertex to the graph
 * @param vertex (string)
 */
Graph.prototype.addVertex = function(vertex) {
    this.adjList[vertex] = []
};
/**
 * Add an edge between two vertices
 * @param vertex1 (string)  source vertex
 * @param vertex2 (string)  target vertex
 */
Graph.prototype.addEdge = function(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2)
};

/**
 * Run a depth first search through the graph. Print all the vertices
 */
Graph.prototype.dfs = function() {
  const visited = {};
  const vertices = Object.keys(this.adjList);
  for(let i=0; i<vertices.length; i++) {
      const vertex = vertices[i];
      this.dfsExplore(vertex, visited);
  }
};
/**
 * Helper function for DFS. Explore a vertex.
 * @param vertex (string)   The vertex to explore
 * @param visited (array)   Keeps track of all the vertices which have been visited
 */
Graph.prototype.dfsExplore = function(vertex, visited) {
    if (!visited[vertex]) {
        visited[vertex] = true;
        // preVisit(vertex);
        console.log(vertex);
        const children = this.adjList[vertex];
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            this.dfsExplore(child, visited);
        }
    }
    // postVisit(vertex);
};
/**
 * Build the graph from json object which contains vertices and edges.
 * @param json (json)   Vertices and edges
 */
Graph.prototype.buildGraphFromJson = function(json) {
    let vertices = json.vertex;
    let edges = json.edges;
    for (let i=0; i<vertices.length; i++) {
        this.addVertex(vertices[i].name);
    }
    for (let i=0; i<edges.length; i++) {
        this.addEdge(edges[i].src, edges[i].trg);
    }
};
/**
 * Print all the leaves from a given vertex
 * @param name (string) The vertex which should have its leaves printed
 */
Graph.prototype.getLeaves = function(name) {
    let leaves = [];
    const vertices = Object.keys(this.adjList);
    for(let i=0; i<vertices.length; i++) {
        const vertex = vertices[i];
        if(vertex === name) {
            const children = this.adjList[vertex];
            for(let j=0; j<children.length; j++) {
                const child = children[j];
                if (this.adjList[child].length === 0) {
                    leaves.push(child);
                }
            }
        }
    }
    return leaves;
};
Graph.prototype.printAdjacencyList = function() {
    console.log(this.adjList);
};

module.exports = Graph;
