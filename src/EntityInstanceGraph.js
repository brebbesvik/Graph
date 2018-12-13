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
            if(e[i].constraint==null)
                this.addEdge(this.getVertexFromType(e[i].src), this.getVertexFromType(e[i].trg), {name: e[i].name});
            else
                this.addEdge(this.getVertexFromType(e[i].src), this.getVertexFromType(e[i].trg), {name: e[i].name, constraint: e[i].constraint});
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
    getEdge(origin, name) {
        for(let i=0; i<this.edges.length; i++) {
            if (this.edges[i].getObject().name === name && this.edges[i].getOrigin() === origin)
                return this.edges[i];
        }
        return null;
    }
    getValueFromPath(path) {
        let pathArray = path.split(".");
        let vertex = null;
        // Path refers to a vertex/source
        if (pathArray.length === 1){
            vertex = this.getVertexFromType(pathArray[0]);
        }
        // Path is complete with a source and edges
        else {
            let edge = this.getEdge(this.getVertexFromType(pathArray[0]).getPosition(), pathArray[1]);
            for (let i = 2; i < pathArray.length; i++) {
                edge = this.getEdge(edge.getDestination(), pathArray[i]);
            }
            vertex = this.vertices[edge.getDestination()];
        }
        // Return presentation vertex if there is one
        let presentationEdge = this.getEdge(vertex.getPosition(), "hasPresentation");
        return (presentationEdge==null ? vertex.getObject().name : this.vertices[presentationEdge.getDestination()].getObject().name);
    }
}
module.exports = EntityInstanceGraph;