const { connect } = require("./client");
const { input } = require("./input");

console.log("Connecting...");

input.setup(connect()); // feeds the socket object returned by the connect function into the setupInput function