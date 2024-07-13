const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  // creates a socket we are calling conn that can listen for incoming data from and send outgoing data to the server
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // allow conn socket to interpret incoming data as text
  conn.setEncoding("utf8");

  // socket listens for succesful connection to server then tells client
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // send the established name initiator to server to name our worm
    conn.write("Name: BEN");
  });

  // allow socket to listen for data from server
  conn.on("data", (data) => {
    // log incoming data to the console
    console.log(data);
  });
  //return the socket object conn to be used by other functions
  return conn;
};

module.exports = { connect };