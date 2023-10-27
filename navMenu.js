/////////////////////////////
// encontrar botones segun id
/////////////////////////////

const botonCargarJSON = document.getElementById("botonCargarJSON");
const botonGuardarJSON = document.getElementById("botonGuardarJSON");
const botonAleatorizarValores = document.getElementById("botonAleatorizarValores");
const botonEmpujarValores = document.getElementById("botonEmpujarValores");
const filePathElement = document.getElementById('filePath')

//////////////////////////
// agregar event listeners
//////////////////////////

// TODO: esto lo hace aaron
botonCargarJSON.addEventListener("click", async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});

// TODO: esto quiero que hagan y entiendan
botonGuardarJSON.addEventListener("click", () => {
  for (let i = 0; i < arregloSliders.length; i++) {
    console.log(arregloSliders[i].value);
  }
});

botonAleatorizarValores.addEventListener("click", () => {
  for (let i = 0; i < arregloSliders.length; i++)  {
    let rango = arregloSliders[i].max - arregloSliders[i].min;
    arregloSliders[i].value = rango * Math.random();
  }
});

botonEmpujarValores.addEventListener("click", () => {
  for (let i = 0; i < arregloSliders.length; i++)  {
    // paso va entre -1 y 1
    let paso = Math.round(2 * Math.random() - 1);
    arregloSliders[i].value = paso + parseInt(arregloSliders[i].value);
  }
});