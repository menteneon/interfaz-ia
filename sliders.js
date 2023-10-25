

const numeroSlidersTotal = 4;

let arregloSliders = [];

let divSliders = document.getElementById("divSliders");

for (let i = 0; i < numeroSlidersTotal; i++) {

  let nuevoSpan = document.createElement("span");

  let nuevoSlider = document.createElement("INPUT");
  nuevoSlider.setAttribute("type", "range");
  nuevoSlider.setAttribute("min", "0");
  nuevoSlider.setAttribute("max", "100");
  nuevoSlider.setAttribute("step", "any");
  nuevoSlider.style.appearance = "slider-vertical";
  nuevoSlider.style.width = "25px";
  nuevoSlider.style.height = "100px";
  arregloSliders.push(nuevoSlider);
  
  let nuevoValor = document.createElement("INPUT");
  nuevoValor.setAttribute("type", "text");
  nuevoValor.style.size = "4";
  nuevoValor.style.maxlength = "4";

  divSliders.appendChild(nuevoSpan);
  nuevoSpan.appendChild(nuevoSlider);
  nuevoSpan.appendChild(nuevoValor);

  nuevoSlider.addEventListener("input", function() {
    nuevoValor.value = this.value;
  });

  nuevoValor.addEventListener("keydown", function(event) { 
    if (event.key === "Enter") {
      nuevoSlider.value = this.value;
    }
  });
 
}