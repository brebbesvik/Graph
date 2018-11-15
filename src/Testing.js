//const Graph = require('./Graph');
const json = require('../Data/asthma-test');
//const EntityGraph = require('./EntityGraph');
const EntityInstanceGraph = require('./EntityInstanceGraph');
const Narrative = require('./Narrative');

const graph = new EntityInstanceGraph();
//graph.buildGraph(json["entity-model"]);
graph.buildGraph(json["entity-instance5"]);
//console.log(graph.getValueFromPath("p1.hasSymptoms.e3.name"));

const narrative = new Narrative();
narrative.setGraph(graph);
narrative.readTemplate();
narrative.transformTemplate();
console.log(narrative.getNarrative());

//console.log(graph.getVertices());
//console.log(graph.getEdges());

/*
const graph = new Graph();
let patient = graph.addVertex("Patient");
let age = graph.addVertex("Age");
let weight = graph.addVertex("Weight");
let symptoms = graph.addVertex("Symptoms");
let wheeze = graph.addVertex("Wheeze");

graph.addEdge(patient, symptoms, "hasSymptoms");
graph.addEdge(patient, age, "e1");
graph.addEdge(patient, weight, "e2");
graph.addEdge(symptoms, wheeze, "e3");

console.log(graph.numVertices());
console.log(graph.getVertices());

console.log(graph.numEdges());
console.log(graph.getEdges());
*/

//console.log(graph.getAdjacentVertices(symptoms));