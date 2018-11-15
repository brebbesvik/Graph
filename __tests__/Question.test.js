const json = require('./asthma-test');
const Question = require('../src/Question');


const question = new Question();

const narrative = "A child arrives at Haukeland hospital. \n" +
    "The child's name is p1, weighs 11 kg and is 18 months old. \n" +
    "You do some quick tests and observations and find that True, True, 40 and P. \n" +
    "The child has obviously asthma, but what is the severity?";

beforeAll(() => {
    question.generateNarrative();
});

test('the narrative should be equal to the narrative we provided', ()=>{
    expect(question.getNarrative()).toMatch(narrative);
});

