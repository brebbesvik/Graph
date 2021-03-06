const json = require('./asthma-test');
const EntityInstanceGraph = require('../src/Graph/EntityInstanceGraph');

const graph = new EntityInstanceGraph();

beforeAll(() => {
    graph.buildGraph(json["entity-instance5"])
});

test('the number of vertices should be 22', ()=>{
    expect(graph.numVertices()).toBe(22);
});

test('the number of edges should be 23', ()=>{
    expect(graph.numEdges()).toBe(23);
});

test('searching for a vertex type Treatment should return a vertex of type Treatment', ()=> {
    expect(graph.getVertexFromType("Treatment").getObject().type).toMatch("Treatment");
});

test('searching for a vertex type Age should return a vertex with name 18 months', ()=> {
    expect(graph.getVertexFromType("Age").getObject().name).toMatch("18 months");
});

// Never use on leaves as those haven't unique names
test('searching for a vertex with name p1 should return a vertex with name p1', ()=> {
    expect(graph.getVertexFromName("p1").getObject().name).toMatch("p1");
});

test('searching for a vertex with name s1 should return a vertex with type Symptoms', ()=> {
    expect(graph.getVertexFromName("s1").getObject().type).toMatch("Symptoms");
});

test('searching for edge e1 should have origin Patient', ()=> {
    let edge = graph.getEdge("e1");
    let originIndex = edge.getOrigin();
    expect(graph.getVertices()[originIndex].getObject().type).toMatch("Patient");
});

test('searching for edge hasSymptoms should have name s1', ()=> {
    let edge = graph.getEdge("hasSymptoms");
    let destinationIndex = edge.getDestination();
    expect(graph.getVertices()[destinationIndex].getObject().name).toMatch("s1");
});

test('path p1.hasSymptoms.e17.name should return 85%', ()=> {
    expect(graph.getValueFromPath("p1.hasSymptoms.e17.name")).toMatch("85%");
});
