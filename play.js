const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "10.255.255.254",
    port: 50541
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");


  conn.on("data", () => {
    console.log("data");
  })

  return conn;
}

console.log("Connection...");
connect();