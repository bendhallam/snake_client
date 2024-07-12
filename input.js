let connection;

// callback to take in and interpret user input into actions
const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  };
  if (key === "\u0077") {
    connection.write("Move: up");
  };
  if (key === "\u0073") {
    connection.write("Move: down");
  };
  if (key === "\u0061") {
    connection.write("Move: left");
  };
  if (key === "\u0064") {
    connection.write("Move: right");
  };
}

// allow our client to accept inputs from user
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin; // create a variable to hold the stdin object so we don't have to type it multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin; // return the stdin object so we can use it elsewhere in the program
};

module.exports = { setupInput };