const Graph = require('./Graph');

class WorkflowInstanceGraph extends Graph {
    constructor() {
        super();
    }
    buildGraph(json) {
        let v = json.Task;
        let e = json.Flow;
        for (let i=0; i<v.length; i++) {
            if (v[i].id)
                this.addVertex({id: v[i].id, name: v[i].name, type: v[i].type});
            else
                this.addVertex({name: v[i].name, type: v[i].type});
        }
        for (let i=0; i<e.length; i++) {
            this.addEdge(this.getVertexFromId(e[i].src), this.getVertexFromId(e[i].trg), e[i].name);
        }
    }
    getVertexFromId(id) {
        for(let i=0; i<this.vertices.length; i++) {
            if (this.vertices[i].getObject().id === id) {
                return this.vertices[i];
            }
        }
    }
}
module.exports = WorkflowInstanceGraph;