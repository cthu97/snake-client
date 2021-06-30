const net = require('net');
const { stdin } = require('process');
const connect = require('./client')

console.log("Connecting ...");


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  
};

stdin.on('data', handleUserInput)

setupInput();
connect();