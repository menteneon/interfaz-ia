/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
// slider horizontal
let sliderHorizontal = document.getElementById("sliderh");
let number = document.getElementById("number");


// cuando hay un cambio desde el slider va cambiar el valor 1,2... callback es cuando un elemento ocurre 
sliderHorizontal.oninput = function() {
  number.value = this.value;
}
//cuando hay un cambio desde el input el slider cambiara 
number.oninput = function(){
  sliderHorizontal.value = this.value;
}


//slider vertical
let sliderVertical = document.getElementById("sliderv");
let numbertwo = document.getElementById("numbertwo");

// cuando hay un cambio desde el slider va cambiar el valor 1,2...
sliderVertical.oninput = function() {
  numbertwo.value = this.value;
}
//cuando hay un cambio desde el input el slider cambiara 
numbertwo.oninput = function(){
  sliderVertical.value = this.value;
}


