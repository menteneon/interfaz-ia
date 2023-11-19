// por hacer

//no funciona 
// const { ipcRenderer } =  require('electron');


// Obtener el botón por su ID
const botonConectarOSC = document.getElementById('botonConectarOSC');

// Manejar el evento de clic en el botón
botonConectarOSC.addEventListener('click', () => {
  console.log('antes click conectar osc')
  // Enviar un mensaje al proceso principal cuando se hace clic en el botón
  ipcRenderer.send('conectar-osc');
  console.log('despues click conectar osc')
});
//no funciona 

// obtener el elemento input de puerto de envio OSC por su id
const inputPuertoEnvio = document.getElementById('puertoEnvio');

let puertoEnvio = 8001;

// TODO: agregar un event listener que haga que
// cuando cambia el numero del puerto y hacemos ENTEr
// se actualice la variable puertoEnvio
// inputPuertoEnvio.addEventListener()


//Esto si funciona
const { Client } = require('osc-js');

const oscClient = new Client({
  send: {
    host: '127.0.0.1', // Dirección IP del servidor OSC (puede ser la misma máquina si Protokol
    // y tu aplicación están en la misma computadora)
    port: puertoEnvio // Puerto del servidor OSC (debe coincidir con el puerto que Protokol está escuchando)
  }
});

// En algún lugar de tu código cuando quieras enviar un mensaje OSC
oscClient.send(new OSC.Message('/ruta/osc', 123, 'hola'));
//hasta aqui :D


//no se donde va 
// const { app, BrowserWindow, ipcMain } = require('electron');
// const path = require('path');
// let mainWindow;
  // // Escuchar el evento desde el proceso de renderizado
  // ipcMain.on('conectar-osc', () => {
  //   // Lógica para conectar OSC aquí
  //   console.log('Conectar OSC...');
  //   // Tu lógica para conectar OSC va aquí
  // });
//hasta aqui 