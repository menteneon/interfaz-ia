// por hacer

//no funciona 
const { ipcRenderer } =  require('electron');

// Obtener el botón por su ID
const botonConectarOSC = document.getElementById('botonConectarOSC');

// Manejar el evento de clic en el botón
botonConectarOSC.addEventListener('click', () => {
  // Enviar un mensaje al proceso principal cuando se hace clic en el botón
  ipcRenderer.send('conectar-osc');
});
//no funciona 



//Esto si funciona 
const { Client } = require("osc-js");

const oscClient = new Client({
  send: {
    host: "127.0.0.1", // Dirección IP del servidor OSC (puede ser la misma máquina si Protokol
    // y tu aplicación están en la misma computadora)
    port: 12345 // Puerto del servidor OSC (debe coincidir con el puerto que Protokol está escuchando)
  }
});

// En algún lugar de tu código cuando quieras enviar un mensaje OSC
oscClient.send(new OSC.Message("/ruta/osc", 123, "hola"));
//hasta aqui :D




//no se donde va 
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  });

  // Cargar el archivo HTML en la ventana
  mainWindow.loadFile('index.html');

  // Escuchar el evento desde el proceso de renderizado
  ipcMain.on('conectar-osc', () => {
    // Lógica para conectar OSC aquí
    console.log('Conectar OSC...');
    // Tu lógica para conectar OSC va aquí
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
//hasta aqui 