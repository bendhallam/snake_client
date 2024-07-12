const connect = require("./client");

const setupInput = () => {
  const stdin = process.stdin; // create a variable to hold the stdin object so we don't have to type it multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin; // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
}

console.log("Connection...");
connect();