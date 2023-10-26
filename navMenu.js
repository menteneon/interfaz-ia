/////////////////////////////
// encontrar botones segun id
/////////////////////////////
let botonCargarJSON = document.getElementById("botonCargarJSON");
let botonGuardarJSON = document.getElementById("botonGuardarJSON");
let botonAleatorizarValores = document.getElementById("botonAleatorizarValores");
let botonEmpujarValores = document.getElementById("botonEmpujarValores");

//////////////////////////
// agregar event listeners
//////////////////////////

const filePathElement = document.getElementById('filePath')

botonCargarJSON.addEventListener("click", async () => {
  const filePath = await window.electronAPI.openFile()
  filePathElement.innerText = filePath
});

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