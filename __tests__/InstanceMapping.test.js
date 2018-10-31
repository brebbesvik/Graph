const InstanceMapping = require('../src/InstanceMapping');
let json = require('./asthma-test');

const instanceMap = new InstanceMapping();
let patientAttributes = ['Weight', 'Age'];
let symptomsAttributes = ['Oxygen-Saturation', 'Wheeze', 'Inability-To-Complete-Sentences'];

beforeAll(() => {
    instanceMap.buildMapping(json["entity-instance5"].vertex);
});


test('the patient should be 18 months old', ()=>{
    let age = instanceMap.getNameNarrativeFormat(patientAttributes[1]);
    expect(age).toMatch("18 months");
});


test('the patient should be weigh 11kg', ()=>{
    let weight = instanceMap.getNameNarrativeFormat(patientAttributes[0]);
    expect(weight).toMatch("11 kg");
});

test('the patient should have oxygen saturation 85%', ()=>{
    let oxygen = instanceMap.getNameNarrativeFormat(symptomsAttributes[0]);
    expect(oxygen).toMatch("oxygen saturation 85%");
});

test('the patient should have oxygen saturation 85%, wheeze and no inability to complete sentences', ()=> {
   let symptoms = instanceMap.getNamesInNarrativeFormat(symptomsAttributes);
   expect(symptoms).toMatch("oxygen saturation 85%, wheeze and no inability to complete sentences.");
});