
let botonAleatorizarValores = document.getElementById("botonAleatorizarValores");

botonAleatorizarValores.addEventListener('click', () => {
  for (let i = 0; i < arregloSliders.length; i++)  {
    let rango = arregloSliders[i].max - arregloSliders[i].min;
    console.log(rango);
    arregloSliders[i].value = rango * Math.random();
  }
});