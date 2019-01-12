const json = require('./asthma-test');
const EntityGraph = require('../src/Graph/EntityGraph');

const graph = new EntityGraph();

beforeAll(() => {
    graph.buildGraph(json["entity-model"]);
});

test('the number of vertices should be 22', ()=>{
    expect(graph.numVertices()).toBe(22);
});

test('the number of edges should be 23', ()=>{
    expect(graph.numEdges()).toBe(23);
});

test('searching for a Patient vertex should return a Patient vertex', ()=> {
   expect(graph.getVertex("Patient").getObject()).toMatch("Patient");
});

test('vertex diagnosis should have 2 incoming edges', ()=> {
    expect(graph.getVertex("Diagnosis").getIncomingEdges()).toBe(2);
});

test('vertex symptoms should have 11 outgoing edges', ()=> {
    expect(graph.getVertex("Symptoms").getOutgoingEdges()).toBe(11);
});