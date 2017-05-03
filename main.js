const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const { ipcMain } = require('electron')
const { ipcRenderer } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow () {
  win = new BrowserWindow({width: 1000, height: 800});

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'renderer' ,'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.toggleDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

ipcMain.on('open-style-guide', function (event, arg) {
  const styleWindow = new BrowserWindow({
    minHight: 400,
    minWidth: 800,
    useContentSize: true,
    backgroundColor: '#777',
    titleBarStyle: 'hidden'
  });

  styleWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'renderer' ,'styleguide.html'),
    protocol: 'file:',
    slashes: true
  }));

  styleWindow.once('ready-to-show', () => {
    styleWindow.show()
  });


})
