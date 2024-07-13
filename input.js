const { keyInputs } = require("./constants");

// stores the active TCP connection object
let connection;

// input object to handle all input logic
const input = {
  // callback to take in and interpret user input into actions
  handleUser: function(key) {
    // escape case
    if (key === "\u0003") {
      console.log("Disconnecting now...");
      process.exit();
    }
    // check if input is bound to an action and if so, send action to server
    if (keyInputs[key]) {
      connection.write(keyInputs[key]);
    }
  },

  // allow our client to accept inputs from user
  setup: function(conn) {
    connection = conn;
    const stdin = process.stdin; // create a variable to hold the stdin object so we don't have to type it multiple times
    stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for user to press enter
    stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
    stdin.resume(); // resume stdin so the program can listen for input
    stdin.on("data", this.handleUser);
    return stdin; // return the stdin object so we can use it elsewhere in the program
  }
};

module.exports = { input };