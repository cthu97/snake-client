const net = require('net');
const connect = () => {
  const conn = net.createConnection({ 
  host: '135.23.223.133', 
  port: 50542 
});
conn.setEncoding("utf8");
conn.on('connect', () => {
  conn.write("Name: C")
})
return conn;
}



module.exports = connect