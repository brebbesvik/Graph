const Graph = require('../src/Graph');
let json = require('./asthma-test');

const graphEntityInstance3 = new Graph();

beforeAll(() => {
    graphEntityInstance3.buildGraphFromJson(json["entity-model"]);
});


test('the number of symptoms should be 10', ()=>{
    let attributes = graphEntityInstance3.getLeaves("Symptoms");
    expect(attributes.length).toBe(10);
});

test('the number of patient attributes should be 2', ()=>{
    let attributes = graphEntityInstance3.getLeaves("Patient");
    expect(attributes.length).toBe(2);
});

test('the number of diagnosis attributes should be 2', ()=>{
    let attributes = graphEntityInstance3.getLeaves("Diagnosis");
    expect(attributes.length).toBe(2);
});

test('the number of treatment attributes should be 4', ()=>{
    let attributes = graphEntityInstance3.getLeaves("Treatment");
    expect(attributes.length).toBe(4);
});

test('The patient attributes should be weight and age', ()=>{
    let attributes = graphEntityInstance3.getLeaves("Patient");
    expect(attributes).toContain("Age");
    expect(attributes).toContain("Weight");
});