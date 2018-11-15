const json = require('../Data/asthma-test');
const EntityInstanceGraph = require('./EntityInstanceGraph');
const Narrative = require('./Narrative');

class Question {
    constructor() {
        this.narrative = null;
        this.correctAnswer = null;
        this.incorrectAnswer = null;
        this.reward=0;
        this.category=null;
    }
    setNarrative(narrative) {
        this.narrative=narrative;
    }
    generateNarrative() {
        const graph = new EntityInstanceGraph();
        graph.buildGraph(json["entity-instance5"]);
        const narrative = new Narrative();
        narrative.setGraph(graph);
        narrative.readTemplate();
        narrative.transformTemplate();
        this.narrative = narrative.getNarrative();
    }
    getNarrative() {
        return this.narrative;
    }
}
module.exports = Question;