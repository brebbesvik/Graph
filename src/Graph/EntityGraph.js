const Graph = require('./Graph');

class EntityGraph extends Graph {
    constructor() {
        super();
    }
    buildGraph(json) {
        let v = json.vertex;
        let e = json.edges;
        for (let i=0; i<v.length; i++) {
            this.addVertex(v[i].name);
        }
        for (let i=0; i<e.length; i++) {
            this.addEdge(this.getVertex(e[i].src),this.getVertex(e[i].trg), e[i].name);
        }
    }
    getVertex(name) {
        for(let i=0; i<this.vertices.length; i++) {
            if (this.vertices[i].object === name)
                return this.vertices[i];
        }
    }

}
module.exports = EntityGraph;