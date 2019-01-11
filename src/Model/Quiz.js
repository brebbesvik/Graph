class Quiz {
    constructor() {
        this._category = "";
        this._questions = [];

    }
    setCategory(category) {
        this._category = category;
    }
    getCategory() {
        return this._category;
    }
    setQuestions(questions) {
        this._questions = questions;
    }
}
module.exports = Quiz;