let json = require('../data/asthma-test');
const Graph = require('./Graph');
const InstanceMapping = require('./InstanceMapping');


const graphEntityInstance3 = new Graph();
graphEntityInstance3.buildGraphFromJson(json["entity-model"]);

const instanceMap = new InstanceMapping();
instanceMap.buildMapping(json["entity-instance5"].vertex);

let attributes = graphEntityInstance3.getLeaves("Symptoms");
console.log(attributes);
//console.log(instanceMap.getNames(attributes));
console.log(instanceMap.getNamesInNarrativeFormat(attributes));
console.log(instanceMap.getNameNarrativeFormat("Oxygen-Saturation"));
