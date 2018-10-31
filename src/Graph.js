let json = require('../data/asthma-test');

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

/**
 * Maps an instanse from the entity model to an array. Uses type for indexing
 * @constructor
 */
function InstanceMapping() {
    this.MappingList = [];
}

/**
 * Maps an instanse from the entity model to an array. Uses type for indexing
 * @param instanceVertices (json)   Vertices from the instance model
 */
InstanceMapping.prototype.buildMapping = function(instanceVertices) {
    this.MappingList = [];
    for(let i=0; i<instanceVertices.length; i++) {
        let index =[instanceVertices[i].type];
        delete instanceVertices[i].type;
        this.MappingList[index] = instanceVertices[i];
    }
};

/**
 * Get a name from the mapping table, given an index.
 * From the graph class, type is a vertex and this function returns the value which corresponds to that vertex.
 * @param type  is a string from the graph vertex
 * @returns {*} the corresponding name attribute for the type
 */
InstanceMapping.prototype.getName = function(type) {
   if(this.MappingList[type])
       return this.MappingList[type].name;
};
InstanceMapping.prototype.getNames = function(types) {
    let names = [];
    for (i=0; i<types.length; i++) {
        let type = types[i];
        if (this.MappingList[type])
            names.push(this.MappingList[type].name);
    }
    return names;
};
/**
 * Prints the mapping in a format which can be displayed in a narrative.
 * Boolean will be printed as type or no type.
 * Undefined will not be printed.
 * Text or values will be printed as type + name
 * @param type (string)  is a string from the graph vertex. It will be the index in the mapping table.
 * @returns {string}    a string which can be printed in a narrative.
 */
InstanceMapping.prototype.getNameNarrativeFormat = function(type) {
    let typeFormated = type.replace(/\-+/g, ' ').toLowerCase();
    if(typeof this.MappingList[type] !== 'undefined') {
        if(this.MappingList[type].name === "True")
            return typeFormated;
        else if (this.MappingList[type].name === "False")
            return "no " + typeFormated;
        else
            return typeFormated + " " + this.MappingList[type].name;
    }
};
/**
 * Given an array of types, prints the mapping in a format which can be displayed in a narrative.
 * Boolean will be printed as type or no type.
 * Undefined will not be printed.
 * Text or values will be printed as type + name
 * @param types {Array}(string  is an array of string from graph vertices. Those will be the indexes in the mapping table.
 * @returns (string) a string which can be printed in a narrative.
 */
InstanceMapping.prototype.getNamesInNarrativeFormat = function(types) {
    let names = [];
    for (let i=0; i<types.length; i++) {
        let typeFormated = types[i].replace(/-+/g, ' ').toLowerCase();
        if (typeof this.MappingList[types[i]] !== 'undefined') {
            if (this.MappingList[types[i]].name === "True")
                names.push(typeFormated);
            else if (this.MappingList[types[i]].name === "False")
                names.push("no " + typeFormated);
            else
                names.push(typeFormated + " " + this.MappingList[types[i]].name);
        }
    }
    return this.printableList(names);
};

/**
 * Formats an array to a printable list
 * @param names {Array}(string) An array of strings which is going to be convert to a string list
 * @returns {string} The printable list represented as a string
 */
InstanceMapping.prototype.printableList = function(names) {
    let list = "";
    for(let i=0; i<names.length; i++) {
        if (i+1 === names.length)
            list += names[i] + ".";
        else if (i+2 === names.length)
            list += names[i] + " and ";
        else
            list += names[i] + ", ";
    }
    return list;
};

/*const graphEntityModel = new Graph();
graphEntityModel.buildGraphFromJson(json["entity-model"]);
graphEntityModel.getLeaves("Patient");*/
//graphEntityModel.dfs();


const graphEntityInstance3 = new Graph();
graphEntityInstance3.buildGraphFromJson(json["entity-model"]);

const instanceMap = new InstanceMapping();
instanceMap.buildMapping(json["entity-instance5"].vertex);

//graphEntityInstance3.dfs();


let attributes = graphEntityInstance3.getLeaves("Symptoms");
console.log(attributes);
console.log(instanceMap.getNames(attributes));
console.log(instanceMap.getNamesInNarrativeFormat(attributes));
console.log(instanceMap.getNameNarrativeFormat("Oxygen-Saturation"));
