function Narrative() {
    this.re = /<%([A-z,\-]+)?%>/g;
    this.template = "";
    this.narrative = "";
    this.graph = null;
    this.mapping = null;
}
Narrative.prototype.setGraph = function(graph) {
    this.graph = graph;
};
Narrative.prototype.setMapping = function(mapping) {
  this.mapping = mapping;
};
Narrative.prototype.read = function() {
    // TODO this template should come from data model
    this.template = 'A child arrives at Haukeland hospital. ' +
        'The child is <%Patient%>. ' +
        'You do some quick tests and observations and find that <%Symptoms%>. ' +
        'The child has obviously asthma, but what is the severity?';
};
Narrative.prototype.transform = function() {
    let tags = [];
    let match;
    while (match= this.re.exec(this.template)) {
        tags.push(match[1]);
    }
    let tpl = this.template;
    for(let i=0; i<tags.length; i++) {
        // TODO Get printable string
        let attributes = this.graph.getLeaves(tags[i]);
        let mappedValues = this.mapping.getNamesInNarrativeFormat(attributes);
        let regex = new RegExp("<%" + tags[i] + "%>", "gi");
        tpl = tpl.replace(regex, mappedValues);
    }
    this.narrative = tpl;
    console.log(this.narrative);
};

module.exports = Narrative;

/*let narrative = new Narrative();
narrative.read();
narrative.transform();*/


