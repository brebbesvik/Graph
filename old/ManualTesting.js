let json = require('../Data/asthma-test');
const Graph = require('./Graph');
const InstanceMapping = require('./InstanceMapping');
const Narrative = require('./Narrative');


const graphEntityInstance3 = new Graph();
graphEntityInstance3.buildGraphFromJson(json["entity-model"]);

/*const graphEntityInstance5 = new Graph();
graphEntityInstance5.buildGraphFromJson(json["entity-instance5"]);
*/
graphEntityInstance3.printAdjacencyList();

/*const instanceMap = new InstanceMapping();
instanceMap.buildMapping(json["entity-instance5"].vertex);

const narrative = new Narrative();
narrative.setGraph(graphEntityInstance3);
narrative.setMapping(instanceMap);
narrative.read();

narrative.transform();
*/
//let attributes = graphEntityInstance3.getLeaves("Symptoms");
//console.log(attributes);
//console.log(instanceMap.getNames(attributes));
//console.log(instanceMap.getNamesInNarrativeFormat(attributes));
//console.log(instanceMap.getNameNarrativeFormat("Oxygen-Saturation"));
