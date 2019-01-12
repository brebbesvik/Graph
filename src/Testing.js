//const Graph = require('./Graph');
//const json = require('../Data/asthma-test');
//const EntityGraph = require('./EntityGraph');
//const EntityInstanceGraph = require('./EntityInstanceGraph');
//const Narrative = require('./Narrative');
//const Question = require('./Question');
//const WorkflowGraph = require('./WorkflowGraph');
//const WorkflowInstanceGraph = require('./Graph/WorkflowInstanceGraph');
//const Quiz = require('./Quiz');
const QuestionDAO = require('./DAO/QuestionDAO');

/*const graph = new WorkflowInstanceGraph();
graph.buildGraph(json["workflow-instance2"]);
console.log(graph.getVertices());
console.log(graph.getEdges());*/

/*
const question = new Question();
question.generateQuestion();
console.log(question.getNarrative())
*/

/*const quiz = new Quiz();
quiz.generateQuestions();
*/

let questionDAO = new QuestionDAO();
console.log(QuestionDAO.getQuestions("Asthma", "Examination", 1))