const { ipcRenderer } = require('electron')
function minimizar() {
    ipcRenderer.send('minimize', 'minimizando')
}
function maximizar() {
    ipcRenderer.send('maximize', 'maximizando')
}
function fechar() {
    ipcRenderer.send('close', 'fechando')
}