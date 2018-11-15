class Vertex {
    constructor(o, p) {
        this.incomingEdges = 0;
        this.outgoingEdges = 0;
        this.object = o;
        this.position = p;
    }
    getPosition() {
        return this.position;
    }
    increaseOutgoingEdges() {
        this.outgoingEdges++;
    }
    increaseIncomingEdges() {
        this.incomingEdges++;
    }
}
module.exports = Vertex;