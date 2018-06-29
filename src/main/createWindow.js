const { BrowserWindow } = require('electron');

let win;
function createWindow() {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/../../dist/index.html`);
    win.on('close', () => {
        win = null;
    })
}

module.exports = createWindow;