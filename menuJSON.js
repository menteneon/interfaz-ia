/////////////////////////////
// encontrar botones segun id
/////////////////////////////

const fs = require('node:fs');

const botonCargarJSON = document.getElementById('botonCargarJSON');
const botonGuardarJSON = document.getElementById('botonGuardarJSON');
const filePathElement = document.getElementById('filePath');

//////////////////////////
// agregar event listeners
//////////////////////////

// TODO: esto lo hace aaron
botonCargarJSON.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});

botonGuardarJSON.addEventListener('click', async () => {

  // crear objeto JavaScript en blanco
  let objeto = {};
  // poblar los contenidos con los valores de los sliders
  for (let i = 0; i < arregloSliders.length; i++) {
    objeto['slider' + i] = {'valor': arregloSliders[i].value};
  }
  const contenidoJSON = JSON.stringify(objeto);
  // console.log(contenidoJSON);

  const direccionGrabar = await window.electronAPI.saveFile();

  // const grabarDiscoDuro = await window.electronAPI.
  

});