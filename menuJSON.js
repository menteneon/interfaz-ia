/////////////////////////////
// encontrar botones segun id
/////////////////////////////

const botonCargarJSON = document.getElementById('botonCargarJSON');
const botonGuardarJSON = document.getElementById('botonGuardarJSON');
const filePathElement = document.getElementById('filePath');

//////////////////////////
// agregar event listeners
//////////////////////////

// TODO: esto lo hace aaron
botonCargarJSON.addEventListener('click', async () => {
  const direccionCargar = await window.electronAPI.dialogOpenFile();
  filePathElement.innerText = direccionCargar;

  // aquiVoy
  let datosLeidos = await window.electronAPI.loadJSON(direccionCargar);
  console.log(typeof(datosLeidos));
  // const objeto = JSON.parse(datosLeidos);
  console.log(datosLeidos);
});

botonGuardarJSON.addEventListener('click', async () => {

  // crear objeto JavaScript en blanco
  let objeto = {};
  // poblar los contenidos con los valores de los sliders
  for (let i = 0; i < arregloSliders.length; i++) {
    objeto['slider' + i] = {'valor': arregloSliders[i].value};
  }

  // los argumentos de stringify son:
  // objeto a convertir a JSON, reemplazador, espaciado
  const contenidoJSON = JSON.stringify(objeto, null, 2);

  const direccionGrabar = await window.electronAPI.dialogSaveFile();

  await window.electronAPI.saveFile(direccionGrabar, contenidoJSON);  

});