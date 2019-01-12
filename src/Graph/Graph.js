const Vertex = require('./Vertex');
const Edge = require('./Edge');

class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
    }
    addVertex(o) {
        let vertex = new Vertex(o, this.vertices.length);
        this.vertices[vertex.getPosition()] = new Vertex(o, vertex.getPosition());
        return vertex;
    }
    addEdge(v, w, o) {
        this.vertices[v.getPosition()].increaseOutgoingEdges();
        this.vertices[w.getPosition()].increaseIncomingEdges();
        let edge = new Edge(v.getPosition(), w.getPosition(), o, this.edges.length);
        this.edges[edge.getPosition()] = new Edge(v.getPosition(), w.getPosition(), o, edge.getPosition());
        return edge;
    }
    getAdjacentVertices(v) {
        let array = [];
        for (let i=0; i<this.edges.length; i++) {
            if(this.edges[i].getOrigin() === v.getPosition()) {
                array.push(this.vertices[this.edges[i].getDestination()]);
            }
            else if (this.edges[i].getDestination() === v.getPosition())
                array.push(this.vertices[this.edges[i].getOrigin()]);
        }
        return array;
    }
    numVertices() {
        return this.vertices.length;
    }
    numEdges() {
        return this.edges.length;
    }
    getVertices() {
        return this.vertices;
    }
    getEdges() {
        return this.edges;
    }
}
module.exports = Graph;