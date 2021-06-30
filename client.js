const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  const uponConnect = () => {
    conn.write("Name: oop")
    console.log('Successfully connected to game server')

    //conn.write("Move: up");
/*     const moves = ["Move: up", "Move: up", "Move: right", "Move: right", "Move: down", "Move: left"]
    let time = 100;
    for (let move of moves) {
      setTimeout(() => {
        conn.write(move)
      }, time)
      time += 50
    } */
  }
    conn.setEncoding("utf8");

    conn.on("connect", uponConnect)
    return conn;
  }

module.exports = { connect }