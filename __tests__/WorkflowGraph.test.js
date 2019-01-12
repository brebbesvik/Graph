const json = require('./asthma-test');
const WorkflowGraph = require('../src/Graph/WorkflowGraph');

const graph = new WorkflowGraph();

beforeAll(() => {
    graph.buildGraph(json["workflow-model"]);
});

test('the number of vertices should be 3', ()=>{
    expect(graph.numVertices()).toBe(3);
});

test('the number of edges should be 2', ()=>{
    expect(graph.numEdges()).toBe(2);
});

test('searching for a Init vertex should return a Init vertex', ()=> {
    expect(graph.getVertex("Init").getObject()).toMatch("Init");
});

test('vertex treat should have 1 incoming edge', ()=> {
    expect(graph.getVertex("Treat").getIncomingEdges()).toBe(1);
});

test('vertex init should have 2 outgoing edges', ()=> {
    expect(graph.getVertex("Init").getOutgoingEdges()).toBe(2);
});