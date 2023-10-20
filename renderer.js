/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
// slider horizontal
let sliderHorizontal = document.getElementById("sliderH");
let number = document.getElementById("number");
let buttonH = document.getElementById("cargar");
let buttongH = document.getElementById("guardar");
let buttonrH = document.getElementById("random");


// cuando hay un cambio desde el slider va cambiar el valor 1,2... callback es cuando un elemento ocurre 
sliderHorizontal.oninput = function() {
  number.value = this.value;
}

//cuando hay un cambio desde el input el slider cambiara 
//number.oninput = function(){
//  sliderHorizontal.value = this.value;
//}

buttonH.onclick = function(){
  sliderHorizontal.value = number.value;
}

buttongH.onclick = function(){
  alert("JSON pendiente jijijijijiiiii");
}

buttonrH.onclick = function(){
  let random = Math.floor((Math.random() * 100) + 1);
  number.value = random;
  sliderHorizontal.value = random;
}

//slider vertical
let sliderVertical = document.getElementById("sliderV");
let numbertwo = document.getElementById("numbertwo");
let buttonV = document.getElementById("cargarV");
let buttongV = document.getElementById("guardarV");
let buttonrV = document.getElementById("randomV");


// cuando hay un cambio desde el slider va cambiar el valor 1,2...
sliderVertical.oninput = function() {
  numbertwo.value = this.value;
}
// //cuando hay un cambio desde el input el slider cambiara 
// numbertwo.oninput = function(){
//   sliderVertical.value = this.value;
// }
buttonV.onclick = function(){
  sliderVertical.value = numbertwo.value;
}

buttongV.onclick = function(){
  alert("JSON pendiente jijijijijiiiii");
}
// referencia:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random3
buttonrV.onclick = function(){
  let random = Math.floor((Math.random() * 100) + 1);
  numbertwo.value = random;
  sliderVertical.value = random;
}

