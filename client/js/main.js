// Some Global Data
var graph_edges;    // should hold all the graph edges after graph rendering.
var update = false;

var graph;

var width = window.innerWidth - 30,
    height = window.innerHeight - 30;
var initialized = false;
var fr_pathnames;
var hierarchies_displayed = false;

var nodepaths;
var pathNodesList = [];

// debug flags
var debug = false;   // add to all debug statements
var checkpoints = true; // add to all checkpoints

