const path = require('path');
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    icon: path.join(__dirname + '/img/icon.png')
});
  win.setMenuBarVisibility(false);
  win.setTitle('About Germany');
  win.loadURL("https://nikfirst2.s3.eu-north-1.amazonaws.com/about+germany/index.html");
};

app.whenReady().then(() => {
  createWindow();
});