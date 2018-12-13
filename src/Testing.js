//const Graph = require('./Graph');
const json = require('../Data/asthma-test');
//const EntityGraph = require('./EntityGraph');
//const EntityInstanceGraph = require('./EntityInstanceGraph');
//const Narrative = require('./Narrative');
const Question = require('./Question');
//const WorkflowGraph = require('./WorkflowGraph');
const WorkflowInstanceGraph = require('./WorkflowInstanceGraph');

/*const graph = new WorkflowInstanceGraph();
graph.buildGraph(json["workflow-instance2"]);
console.log(graph.getVertices());
console.log(graph.getEdges());*/

const question = new Question();
question.generateQuestion();
console.log(question.getNarrative())
