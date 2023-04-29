const { app, BrowserWindow, ipcMain } = require('electron')
let win

function mainWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame:false,
        // show:false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:false,
            nodeIntegrationInSubFrames: true,
        }
    })
    win.loadFile(`${__dirname}/index.html`)
    
    win.on('ready-to-show', () => {
        win.show()
    })

    ipcMain.on('minimize', (e, data) => {
        win.minimize()
        window.minimize()
    })

    ipcMain.on('maximize', (e, data) => {
        if (win.isMaximized()) {
            win.unmaximize()
        }
        else {
            win.maximize()
        }
    })

    ipcMain.on('close', (e, data) => {
        win.close()
    })
}

app.on('ready', mainWindow)