

const numeroSlidersTotal = 40;

let arregloSliders = [];

let divSliders = document.getElementById("divSliders");

for (let i = 0; i < numeroSlidersTotal; i++) {
  let nuevoSpan = document.createElement("span");

  let nuevoSlider = document.createElement("INPUT");
  nuevoSlider.setAttribute("type", "range");
  nuevoSlider.setAttribute("min", "0");
  nuevoSlider.setAttribute("max", "100");
  arregloSliders.push(nuevoSlider);
  nuevoSlider.style.appearance = "slider-vertical";
  
  let nuevoValor = document.createElement("INPUT");
  nuevoValor.setAttribute("type", "text");
  nuevoValor.style.size = "4";
  nuevoValor.style.maxlength = "4";

  divSliders.appendChild(nuevoSpan);
  nuevoSpan.appendChild(nuevoSlider);
  // nuevoSpan.appendChild(nuevoValor);

  nuevoValor.value = nuevoSlider.value;

  nuevoSlider.style.width = "25px";
  nuevoSlider.style.height = "100px";

  nuevoSlider.addEventListener("click", function () { 
    nuevoValor.value = this.value;
  });
 
}




// {/* <input class="sliderV" id="sliderV" orient="vertical" type="range"  value="0" min="1" max="100"/> */ }
// {/* <p>Valor: <input type="number" value="0" min="0" max="100" id="numbertwo"/></p> */}