class Narrative {
    constructor() {
        this.re = /<%([a-zA-Z0-9_\-.]+)%>/g;
        this.entityGraph = null;
        this.template = "";
        this.narrative = "";
    }
    setEntityGraph(graph) {
        this.entityGraph = graph;
    }
    readTemplate() {
        // TODO this template should come from the data model
        /*this.template = "A child arrives at Haukeland hospital.\n" +
            "The child's name is <%Patient%>, weighs <%Patient.e2%> and is <%Patient.e1%> old. \n" +
            "You do some quick tests and observations and find that the child has \n" +
            "<%Patient.hasObservations.e4%>, " +
            "<%Patient.hasObservations.e3%>, " +
            "<%Patient.hasObservations.e18%> and " +
            "<%Patient.hasObservations.e14%>." +
            "\nThe child has obviously asthma, but what is the severity?";*/
        this.template = "<%Patient%> arrives at the emergency room. \n" +
            "She <%Patient.underGoesExamination.Wheeze%>.\n" +
            "You do some quick tests and observations and find that <%Patient%> \n" +
            "<%Patient.underGoesExamination.Consciousness%> and <%Patient.underGoesExamination.Pulse-Rate%>";
    }
    getTags() {
        let tags = [];
        let match;
        while (match= this.re.exec(this.template)) {
            tags.push(match[1]);
        }
        return tags;
    }
    transformTemplate() {
        let tags = this.getTags();
        let tpl = this.template;
        for(let i=0; i<tags.length; i++) {
            let regex = new RegExp("<%" + tags[i] + "%>", "g");
            tpl = tpl.replace(regex, this.entityGraph.getTextFromPath(tags[i]));
        }
        this.narrative = tpl;
    }
    getNarrative() {
        return this.narrative;
    }
}
module.exports = Narrative;