class AnswerAlternative {
    constructor() {
        this._alternative = "";
        this._reward = 0;
        this._correct = false;
    }
    setAlternative(alternative) {
        this._alternative = alternative;
    }
    getAlternative() {
        return this._alternative;
    }
    setReward(reward) {
        this._reward = reward;
    }
    getReward() {
        return this._reward;
    }
    setCorrect(correct) {
        this._correct = correct;
    }
    getCorrect() {
        return this._correct;
    }
}
module.exports = AnswerAlternative;