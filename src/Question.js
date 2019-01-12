// const json = require('../Data/asthma-test');
const json = require('../Data/email');
const EntityInstanceGraph = require('./Graph/EntityInstanceGraph');
const WorkflowInstanceGraph = require('./Graph/WorkflowInstanceGraph');
const Narrative = require('./Graph/Narrative');

class Question {
    constructor() {
        this.narrative = null;
        this.correctAnswer = null;
        this.incorrectAnswer = null;
        this.reward=0;
        this.category=null;
        this.entityGraph = null;
        this.workflowGraph = null;
    }
    setNarrative(narrative) {
        this.narrative=narrative;
    }
    setEntityGraph() {
        const graph = new EntityInstanceGraph();
        //graph.buildGraph(json["entity-instance5"]);
        graph.buildGraph(json["entity-instance"]);
        this.entityGraph = graph;
    }
    setWorkflowGraph() {
        const graph = new WorkflowInstanceGraph();
        graph.buildGraph(json["workflow-instance1"]);
        this.workflowGraph = graph;
    }
    generateQuestion() {
        this.setEntityGraph();
        //this.setWorkflowGraph();
        this.generateNarrative();
    }
    generateNarrative() {
        const narrative = new Narrative();
        narrative.setEntityGraph(this.entityGraph);
        narrative.readTemplate();
        narrative.transformTemplate();
        this.narrative = narrative.getNarrative();
    }
    getNarrative() {
        return this.narrative;
    }
}
module.exports = Question;