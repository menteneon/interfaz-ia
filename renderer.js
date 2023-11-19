/**
 * Este archivo es cargado por la etiqueta <script> en el archivo index.html y sera
 * corrido en el proceso renderer para esa ventana. No hay APIs de Node.js disponibles
 * en este proceso porque `nodeIntegration` esta apagado y `contextIsolation` esta encendido.
 * Usa la API contextBridge en `preload.js` para exponer funcionalidades de Node.js desde el
 * proceso principal.
 */

const spanAppVersion = document.getElementById('appVersion');

window.addEventListener('load', async () => {
  const version = await window.electronAPI.getAppVersion();
  spanAppVersion.innerText = version;
});

window.addEventListener('click', async () => {
  await window.electronAPI.sendOSCMessage('/test/random', Math.random());
});

// const btn = document.getElementById('btn')
// const filePathElement = document.getElementById('filePath')

// btn.addEventListener('click', async () => {
//   const filePath = await window.electronAPI.openFile()
//   filePathElement.innerText = filePath
// })
