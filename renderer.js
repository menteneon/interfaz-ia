/**
 * 
 * Este archivo es cargado por la etiqueta <script> en el archivo index.html y sera
 * corrido en el proceso renderer para esa ventana. No hay APIs de Node.js disponibles
 * en este proceso porque `nodeIntegration` esta apagado y `contextIsolation` esta encendido.
 * Usa la API contextBridge en `preload.js` para exponer funcionalidades de Node.js desde el
 * proceso principal.
 */

const btn = document.getElementById('btn')
const filePathElement = document.getElementById('filePath')

// btn.addEventListener('click', async () => {
//   const filePath = await window.electronAPI.openFile()
//   filePathElement.innerText = filePath
// })

// intento json 20 octubre
// referencia https://www.easydevguide.com/posts/electron_json
// const path = require('path')

// const filePath = path.join(app.getPath('userData'), 'assets/sliders.json')

// function saveData(data) {
//   const text = JSON.stringify(data)
//   fs.writeFile(filePath, text, err => {
//       if (err) {
//           console.error(err)
//       }
//   })
// }

// function readData() {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//           console.error(err);
//           return;
//       }
//     const parsedData = JSON.parse(data);
//       // handle the json data here
//       console.log(parsedData)
//   });
// }



// // slider horizontal
// let sliderHorizontal = document.getElementById("sliderH");
// let number = document.getElementById("number");
// let buttonH = document.getElementById("cargar");
// let buttongH = document.getElementById("guardar");
// let buttonrH = document.getElementById("random");


// // cuando hay un cambio desde el slider va cambiar el valor 1,2... callback es cuando un elemento ocurre 
// sliderHorizontal.oninput = function() {
//   number.value = this.value;
// }

//cuando hay un cambio desde el input el slider cambiara 
//number.oninput = function(){
//  sliderHorizontal.value = this.value;
//}

// buttonH.onclick = function(){
//   sliderHorizontal.value = number.value;
// }

// buttongH.onclick = function(){
//   alert("JSON pendiente jijijijijiiiii");
// }

// buttonrH.onclick = function(){
//   let random = Math.floor((Math.random() * 100) + 1);
//   number.value = random;
//   sliderHorizontal.value = random;
// }

// //slider vertical
// let sliderVertical = document.getElementById("sliderV");
// let numbertwo = document.getElementById("numbertwo");
// let buttonV = document.getElementById("cargarV");
// let buttongV = document.getElementById("guardarV");
// let buttonrV = document.getElementById("randomV");


// // cuando hay un cambio desde el slider va cambiar el valor 1,2...
// sliderVertical.oninput = function() {
//   numbertwo.value = this.value;
// }
// // //cuando hay un cambio desde el input el slider cambiara 
// // numbertwo.oninput = function(){
// //   sliderVertical.value = this.value;
// // }
// buttonV.onclick = function(){
//   sliderVertical.value = numbertwo.value;
// }

// buttongV.onclick = function(){
//   // alert("JSON pendiente jijijijijiiiii");
//   readData();
// }


// // referencia:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random3
// buttonrV.onclick = function(){
//   let random = Math.floor((Math.random() * 100) + 1);
//   numbertwo.value = random;
//   sliderVertical.value = random;
// }
