$(document).ready(function () {
  $("#bubl-next-button").click(function () {
      window.location.href = "/main.html";
  });
});


// Bubble generator
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

var ideas = ["Calculate your gauge swatch for a sweater using Python", "Create an MP3 player frame using HTML, CSS, and Javascript.", "Create a wardrobe catalogue using Python"];

var container = document.getElementById('bubbles');
var data = {
  nodes: nodes,
  edges: edges,
  ideas: ideas
};

var options = {
  // bubble style see here, don't put units in the font size
  nodes: { borderWidth: 0, shape: "circle", color: { background: '#66BFBF',  highlight: { background: '#66BFBF', border: '#66BFBF'} }, font: { color: '#fff', size:25} },
  physics: {
    stabilization: false,
    minVelocity: 0.01,
    solver: "repulsion",
    repulsion: {
      // distance between bubbles
      nodeDistance: 65,
    }
  }
};
var network = new vis.Network(container, data, options);


// Events
network.on("click", function (e) {
  if (e.nodes.length) {
    var node = nodes.get(e.nodes[0]);
    // Do something
    if (node.label === "Knitting") {
      console.log(ideas[0]);
      document.getElementById("idea").innerHTML = ideas[0];
    }
    if (node.label === "Music") {
      console.log(ideas[1]);
      document.getElementById("idea").innerHTML = ideas[1];
    }
    if (node.label === "Fashion") {
      console.log(ideas[2]);
      document.getElementById("idea").innerHTML = ideas[2];
    }
    nodes.update(node);
  }
});



container.on("mouse-wheel", function (event) {
  // prevents zooming with the mouse-wheel event
  event.stopPropagation();
});


