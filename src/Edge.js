class Edge {
    constructor(v, w, o, p) {
        this.object = o;
        this.origin = v;
        this.destination = w;
        this.position = p;
    }
    getPosition() {
        return this.position;
    }

    getOrigin() {
        return this.origin;
    }

    getDestination() {
        return this.destination;
    }
}
module.exports = Edge;