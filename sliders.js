

const numeroSlidersTotal = 4;
// const numeroSlidersFila = 5;

let divSliders = document.getElementById("divSliders");

for (let i = 0; i < numeroSlidersTotal; i++) {
  let nuevoSpan = document.createElement("span");
  let nuevoSlider = document.createElement("INPUT");
  let nuevoValor = document.createElement("INPUT");
  let nuevoEspacio = document.createElement("br");

  nuevoSlider.setAttribute("type", "range");
  nuevoValor.setAttribute("type", "number");

  nuevoValor.style.size = "4";
  divSliders.appendChild(nuevoSpan);
  nuevoSpan.appendChild(nuevoSlider);
  nuevoSpan.appendChild(nuevoValor);
  // nuevoDiv.appendChild(nuevoEspacio);
  // divSliders.appendChild(nuevoSlider);
  // divSliders.appendChild(nuevoValor);
  // divSliders.appendChild(nuevoEspacio);

 
  nuevoSlider.value = 100 * Math.random();
  nuevoSlider.style.appearance = "slider-vertical";

  nuevoValor.value = nuevoSlider.value;

  nuevoSlider.style.width = "25px";
  nuevoSlider.style.height = "250px";

  nuevoSlider.addEventListener("click", function () { 
    nuevoValor.value = this.value;
  });
 

}

// {/* <input class="sliderV" id="sliderV" orient="vertical" type="range"  value="0" min="1" max="100"/> */ }
// {/* <p>Valor: <input type="number" value="0" min="0" max="100" id="numbertwo"/></p> */}