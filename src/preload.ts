import { contextBridge } from 'electron';
import { typedIpcRenderer } from 'typed-ipc';

// Expose typed-ipc to the renderer process
contextBridge.exposeInMainWorld('typedIpcRenderer', typedIpcRenderer);

// This file will automatically be loaded by webpack and run in the "preload" context.
// To learn more about the differences between the "main" and the "preload" context in
// Electron, visit:
//
// https://electronjs.org/docs/latest/tutorial/process-model
//
// By default, Node.js integration in this file is disabled. When enabling Node.js integration
// in a preload process, please be aware of potential security implications. You can read
// more about security risks here:
//
// https://electronjs.org/docs/tutorial/security
//
// To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
// flag:
//
// ```
//   // Create the browser window.
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   });
// ```
