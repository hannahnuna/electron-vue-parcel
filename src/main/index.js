const { app } = require('electron');
const createWindow = require('./createWindow');
const path = require('path');

app.on('ready', () => {
    if (process.env.NODE_ENV !== 'production') {
        require('vue-devtools').install()
    }
    createWindow();
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
    app.quit();
})

app.on('activate', (_e, hasVisibleWindows) => {
    if(!hasVisibleWindows) {
        createWindow(); 
    }
})

if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(path.join(__dirname, '../../dist'));
}
