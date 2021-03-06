const { stdin } = require('process');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", key => handleUserInput(key, connection))
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (key, connection) => {
  if (key === "\u0003") {
    process.exit();
};
if (key === "w"){
  connection.write('Move: up')
}
else if (key === "a"){
  connection.write('Move: left')
}
else if (key === 's'){
  connection.write('Move: down')
}
else if (key === 'd'){
  connection.write("Move: right")
}
else if (key === 'f'){
  connection.write("Say: oop")
}
else if (key === 'v'){
  connection.write("Say: hi")
}
}

module.exports = { setupInput }