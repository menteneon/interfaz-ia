/**
 * Este archivo es cargado por la etiqueta <script> en el archivo index.html y sera
 * corrido en el proceso renderer para esa ventana. No hay APIs de Node.js disponibles
 * en este proceso porque `nodeIntegration` esta apagado y `contextIsolation` esta encendido.
 * Usa la API contextBridge en `preload.js` para exponer funcionalidades de Node.js desde el
 * proceso principal.
 */

// const btn = document.getElementById('btn')
// const filePathElement = document.getElementById('filePath')

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
