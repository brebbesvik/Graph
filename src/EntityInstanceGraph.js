const Graph = require('./Graph');

class EntityInstanceGraph extends Graph {
    constructor() {
        super();
    }
    buildGraph(json) {
        let v = json.vertex;
        let e = json.edges;
        for (let i=0; i<v.length; i++) {
            this.addVertex({name: v[i].name, type: v[i].type});
        }
        for (let i=0; i<e.length; i++) {
            this.addEdge(this.getVertexFromType(e[i].src), this.getVertexFromType(e[i].trg), e[i].name);
        }
    }
    getVertexFromType(type) {
        for(let i=0; i<this.vertices.length; i++) {
            if (this.vertices[i].getObject().type === type)
                return this.vertices[i];
        }
    }
    getVertexFromName(name) {
        for(let i=0; i<this.vertices.length; i++) {
            if (this.vertices[i].getObject().name === name)
                return this.vertices[i];
        }
    }
    getEdge(name) {
        for(let i=0; i<this.edges.length; i++) {
            if (this.edges[i].getObject() === name)
                return this.edges[i];
        }
    }
    // TODO should refer to getObject(), not object
    getValueFromPath(path) {
        let pathArray = path.split(".");
        // Path refers to a vertex
        if (pathArray.length < 3) {
            let vertex = this.getVertexFromName(pathArray[0]);
            return vertex.getObject().name;
        }
        // Path refers to an edge
        else {
            let edge = this.getEdge(pathArray[pathArray.length - 2]);
            return this.vertices[edge.getDestination()].getObject().name;
        }
    }
}
module.exports = EntityInstanceGraph;