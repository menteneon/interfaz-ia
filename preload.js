/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  dialogSaveFile: () => ipcRenderer.invoke('dialog:saveFile'),
  saveFile: (filePath, fileContents) => ipcRenderer.invoke('json:saveFile', filePath, fileContents),
  getAppVersion: () => ipcRenderer.invoke('app:getVersion'),
  sendOSCMessage: () => ipcRenderer.invoke('osc:sendOSCMessage')
});

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) {
      element.innerText = text;
    } 
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
