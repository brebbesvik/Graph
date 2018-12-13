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
    getEdge(origin, name) {
        for(let i=0; i<this.edges.length; i++) {
            if (this.edges[i].getObject() === name && this.edges[i].getOrigin() == origin)
                return this.edges[i];
        }
    }
    getValueFromPath(path) {
        let pathArray = path.split(".");
        let vertex = null;
        //console.log(pathArray);
        // Path refers to a vertex/source
        if (pathArray.length == 1){
            vertex = this.getVertexFromName(pathArray[0]);
        }
        // Path is complete with a source and edges
        else {
            let edge = this.getEdge(this.getVertexFromName(pathArray[0]).getPosition(), pathArray[1]);
            for (let i = 2; i < pathArray.length; i++) {
                edge = this.getEdge(edge.getDestination(), pathArray[i]);
            }
            vertex = this.vertices[edge.getDestination()];
        }
        return vertex.getObject().name;

        /*if (pathArray.length <= 2) {
            let vertex = this.getVertexFromName(pathArray[0]);
            return vertex.getObject().name;
        }
        // Path refers to an edge
        else {
            let edge = this.getEdge(pathArray[pathArray.length - 2]);
            return this.vertices[edge.getDestination()].getObject().name;
        }*/
    }
}
module.exports = EntityInstanceGraph;