const fs = require('fs');
const path = require('path');

const OSC = require('osc-js');
const express = require('express');
const ip = require('ip');

class Server {
  constructor(options) {
    this.options = options;

    this.osc = new OSC({
      plugin: new OSC.BridgePlugin(this.options)
    });

    this.osc.on('error', (error) => {
      console.error('osc error');
    })

    this.osc.on('open', () => {
      console.log('osc open');
    });

    this.httpServer = undefined;
  }

  start() {
    this.osc.open();
  }

  startHttp() {
    const { port, host } = this.options.httpServer;
    const staticPath = path.resolve(__dirname, this.options.staticFolderName);

    this.httpServer = express();

    fs.access(staticPath, err => {
      if (!err) {
        console.log('static folder found');
      } else {
        console.log('static folder not found');
      }
    });

    this.httpServer.use(express.static(staticPath));

    this.httpServer.listen(port, host, () => {
      console.log('http server ready');
    });
  }

  stop() {
    this.osc.close();
  }

  hello() {
    const ipAddress = ip.address();
    const { options } = this;

    // Clear terminal
    // process.stdout.write('\x1Bc');

    if (this.httpServer) {
      console.log('server');
    }
  }
}

function startStaticServer() {
  const options = require('./options.json');
  const server = new Server(options);

  server.start();
  server.startHttp();

  server.hello();
}

if (require.main === module) {
  startStaticServer();
}

module.exports = Server;