var nodes = new vis.DataSet([
  { label: "Knitting" },
  { label: "Music" },
  { label: "Fashion" },
  { label: "Art" },
  { label: "Photography" },
  { label: "Cooking" },
  { label: "Dancing" },
  { label: "Basketball" },
  { label: "Writing" },
  { label: "Reading" },
]);
var edges = new vis.DataSet();

var container = document.getElementById('bubbles');
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  nodes: { borderWidth: 0, shape: "circle", color: { background: '#F92C55', highlight: { background: '#F92C55', border: '#F92C55' } }, font: { color: '#fff' } },
  physics: {
    stabilization: false,
    minVelocity: 0.01,
    solver: "repulsion",
    repulsion: {
      nodeDistance: 40
    }
  }
};
var network = new vis.Network(container, data, options);


// Events
network.on("click", function (e) {
  if (e.nodes.length) {
    var node = nodes.get(e.nodes[0]);
    // Do something
    nodes.update(node);
  }
});

container.on("mouse-wheel", function (event) {
  // prevents zooming with the mouse-wheel event
  event.stopPropagation();
});