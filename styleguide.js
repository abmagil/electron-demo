const { BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

function showStyleguide() {
  const styleWindow = new BrowserWindow({
    minHight: 400,
    minWidth: 800,
    useContentSize: true,
    backgroundColor: '#FFF',
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
}

module.exports = showStyleguide;
