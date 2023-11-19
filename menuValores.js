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
    let paso = (2.0 * Math.random() - 1.0);
    arregloSliders[i].value = paso + Number(arregloSliders[i].value);
    valoresSliders[i].value = arregloSliders[i].value;
  }
});