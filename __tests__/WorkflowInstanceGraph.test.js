const json = require('./asthma-test');
const WorkflowInstanceGraph = require('../src/Graph/WorkflowInstanceGraph');

const graph = new WorkflowInstanceGraph();

beforeAll(() => {
    graph.buildGraph(json["workflow-instance2"])
});

test('the number of vertices should be 2', ()=>{
    expect(graph.numVertices()).toBe(2);
});

test('the number of edges should be 1', ()=>{
    expect(graph.numEdges()).toBe(1);
});

test('searching for a vertex id 1 should return a vertex of id 1', ()=> {
    expect(graph.getVertexFromId("1").getObject().id).toMatch("1");
});

test('searching for a vertex id 2 should return a vertex with name Treatment', ()=> {
    expect(graph.getVertexFromId("2").getObject().name).toMatch("Treatment");
});

test('searching for a vertex with id 1 should return a vertex with type Init', ()=> {
    expect(graph.getVertexFromId("1").getObject().type).toMatch("Init");
});