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
        this.template = "A child arrives at Haukeland hospital.\n" +
            "The child's name is <%p1%>, weighs <%p1.e2%> and is <%p1.e1%> old. \n" +
            "You do some quick tests and observations and find that the child has \n" +
            "<%p1.hasObservations.e4%>, " +
            "<%p1.hasObservations.e3%>, " +
            "<%p1.hasObservations.e18%> and " +
            "<%p1.hasObservations.e14%>." +
            "\nThe child has obviously asthma, but what is the severity?";
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
            tpl = tpl.replace(regex, this.entityGraph.getValueFromPath(tags[i]));
        }
        this.narrative = tpl;
    }
    getNarrative() {
        return this.narrative;
    }
}
module.exports = Narrative;