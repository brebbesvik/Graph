const json = require('../Data/gamingModel');
const Question = require('./Question');
/*
    The collected score of each discipline must be stored on the phone's database.
    Then we can se if the user is allowed to take questions from that specific level.

    The user can get questions from only the latest unlocked level or customized of unlocked levels.

 */
class Quiz {
    constructor() {
        this.requiredMinSkill = 0;
        this.numberOfQuestions = 0;
        this.passingCondition = 0;
        this.trainingModule = null;

        this.scores = {};
        this.levels = {};

        this.questionCategory = null;
        this.questions = [];
    }
    setQuestionCategory(category) {
        this.questionCategory = category
    }
    // Scores must come from the mobile phone
    setScore(discipline, score) {
        this.scores[discipline] = score;
    }
    setLevel(discipline, level, requiredMinSkill) {
        if (this.scores[discipline] > requiredMinSkill) {
            this.levels[discipline].push(level);
        }
    }
    generateQuestions() {
        this.setQuestionCategory(json.asthma.category);
        let disciplines = json.asthma.disciplines;
        for (let i=0; i<disciplines.length; i++) {
            this.setScore(disciplines[i].discipline, 1);
            let levels = disciplines[i].levels;
            for (let j=0; j<levels.length; j++) {
                if (this.scores[disciplines[i].discipline] > levels[j].requiredMinSkill) {
                    let question = new Question();
                    question.generateQuestion();
                    console.log(question.getNarrative());
                    /* TODO : Create a question object from the gamingModel
                        TODO: The question class needs to be updated
                        TODO: The narrative class needs to be updated to recieve a narrative from this class
                    */

                }
            }


        }
        /*disciplines.forEach((element)=> {
            this.setScore(element.discipline, 1);
            let levels = element.levels;
            if (Array.isArray(levels) && levels.length) {levels.forEach(console.log(levels));}

            //levels.forEach(console.log(levels));
            }
            )

        console.log(this.levels);*/

        console.log(this.scores);


        console.log(this.questionCategory + this.scores.Examination);
    }
}
module.exports = Quiz;