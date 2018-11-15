class Narrative {
    constructor() {
        this.re = /<%([a-zA-Z0-9_\-.]+)%>/g;
        this.graph = null;
        this.template = "";
        this.narrative = "";
    }
    setGraph(graph) {
        this.graph = graph;
    }
    readTemplate() {
        // TODO this template should come from the data model
        this.template = 'A child arrives at Haukeland hospital. \n' +
            'The child\'s name is <%p1.name%>, weighs <%p1.e2.name%> and is <%p1.e1.name%> old. \n' +
            'You do some quick tests and observations and find that ' +
            '<%p1.hasSymptoms.e4.name%>, <%p1.hasSymptoms.e3.name%>, <%p1.hasSymptoms.e18.name%> and <%p1.hasSymptoms.e14.name%>. \n' +
            'The child has obviously asthma, but what is the severity?';
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
            // TODO Get printable string
            let regex = new RegExp("<%" + tags[i] + "%>", "g");
            tpl = tpl.replace(regex, this.graph.getValueFromPath(tags[i]));
        }
        this.narrative = tpl;
    }
    getNarrative() {
        return this.narrative;
    }
}
module.exports = Narrative;