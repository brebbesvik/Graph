const Graph = require('../src/Graph');
//let json = require('../data/asthma-test');

test('sum should be 8', ()=> {
    let graph = new Graph();
    expect(graph.sum()).toBe(8);
});