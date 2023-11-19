/////////////////////////////
// encontrar botones segun id
/////////////////////////////

const botonAleatorizarValores = document.getElementById('botonAleatorizarValores');
const botonEmpujarValores = document.getElementById('botonEmpujarValores');

//////////////////////////
// agregar event listeners
//////////////////////////

botonAleatorizarValores.addEventListener('click', () => {
  for (let i = 0; i < arregloSliders.length; i++)  {
    let rango = arregloSliders[i].max - arregloSliders[i].min;
    arregloSliders[i].value = rango * Math.random();
    valoresSliders[i].value = arregloSliders[i].value;
  }
});

botonEmpujarValores.addEventListener('click', () => {
  for (let i = 0; i < arregloSliders.length; i++)  {
    arregloSliders[i].value = ((2.0 * Math.random() - 1.0)) + arregloSliders[i].value;
    valoresSliders[i].value = arregloSliders[i].value;

    // paso va entre -1 y 1
    // let paso = Math.round(2 * Math.random() - 1);
    // arregloSliders[i].value = paso + parseInt(arregloSliders[i].value);
    // let paso = Math.random();
    // // arregloSliders[i].value = paso + arregloSliders[i].value;
    // console.log(valoresSliders[i].value);
    // arregloSliders[i].value = arregloSliders[i].value + (2 * Math.random() - 1);
    // valoresSliders[i].value = arregloSliders[i].value;
  }
});