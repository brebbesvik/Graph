const json = require('./asthma-test');
const Narrative = require('../src/Graph/Narrative');
const EntityInstanceGraph = require('../src/Graph/EntityInstanceGraph');

const graph = new EntityInstanceGraph();
const narrative = new Narrative();

const text = "A child arrives at Haukeland hospital. \n" +
    "The child's name is p1, weighs 11 kg and is 18 months old. \n" +
    "You do some quick tests and observations and find that True, True, 40 and P. \n" +
    "The child has obviously asthma, but what is the severity?";

beforeAll(() => {
    graph.buildGraph(json["entity-instance5"]);
    narrative.setGraph(graph);
    narrative.readTemplate();
    narrative.transformTemplate();
});

test('the narrative should be equal to the narrative we provided', ()=>{
    expect(narrative.getNarrative()).toMatch(text);
});

