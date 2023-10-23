console.log('hola sliders');

const numeroSlidersTotal = 10;
const numeroSlidersFila = 5;

for (let i = 0; i < numeroSlidersTotal; i++) {
  console.log('crear un slider, ' + i);
  let nuevoSlider = document.createElement("INPUT");
  nuevoSlider.setAttribute("type", "range");
  document.body.appendChild(nuevoSlider);
}

{/* <input class="sliderV" id="sliderV" orient="vertical" type="range"  value="0" min="1" max="100"/> */ }
{/* <p>Valor: <input type="number" value="0" min="0" max="100" id="numbertwo"/></p> */}