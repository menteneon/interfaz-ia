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
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});

// TODO: esto quiero que hagan y entiendan
botonGuardarJSON.addEventListener('click', () => {
  for (let i = 0; i < arregloSliders.length; i++) {
    // console.log(arregloSliders[i].value);
  }
});