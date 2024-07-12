let connection;

// callback to take in and interpret user input into actions
const handleUserInput = (key) => {
  // escape case  
  if (key === "\u0003") {
    process.exit();
  };
  // movement keys
  if (key === "w") {
    connection.write("Move: up");
  };
  if (key === "s") {
    connection.write("Move: down");
  };
  if (key === "a") {
    connection.write("Move: left");
  };
  if (key === "d") {
    connection.write("Move: right");
  };
  // canned messages
  if (key === "l") {
    connection.write("Say: looooool");
  };
  if (key === "k") {
    connection.write("Say: keep it up");
  };
  if (key === "j") {
    connection.write("Say: just warming up");
  };
  if (key === "h") {
    connection.write("Say: hey");
  };
  if (key === "g") {
    connection.write("Say: gotcha");
  };
};

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