const { connect } = require("./client");
const { setupInput } = require("./input")


console.log("Connection...");

setupInput(connect()); // feeds the data returned by the connect function into the setupInput function