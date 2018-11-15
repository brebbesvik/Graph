const Graph = require('../src/Graph');

const graph = new Graph();

beforeAll(() => {
    let patient = graph.addVertex("Patient");
    let age = graph.addVertex("Age");
    let weight = graph.addVertex("Weight");
    let symptoms = graph.addVertex("Symptoms");
    let wheeze = graph.addVertex("Wheeze");

    graph.addEdge(patient, symptoms, "hasSymptoms");
    graph.addEdge(patient, age, "e1");
    graph.addEdge(patient, weight, "e2");
    graph.addEdge(symptoms, wheeze, "e3");
});


test('the number of vertices should be 5', ()=>{
    expect(graph.numVertices()).toBe(5);
});

test('the number of edges should be 4', ()=>{
    expect(graph.numEdges()).toBe(4);
});

/*
    expect (attributes).toMatch("18 months");
    expect(attributes).toContain("Weight");
*/