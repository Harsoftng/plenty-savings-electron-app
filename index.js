const { app, BrowserWindow, dialog, Menu } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');
const url = require('url');
const express = require('express');
const serveStatic = require('serve-static');
const isDev = require('electron-is-dev');

const port = 17599;
const staticSitePath = '/resources';

function createWindows() {
  let appWindow = new BrowserWindow({
    alwaysOnTop: false,
    title: 'Plenty Savings Shop',
    minWidth: 1200,
    minHeight: 700,
    maximizable: true
  });

  appWindow.maximize();

  appWindow
    .loadURL(`http://localhost:${port}`)
    .catch((reason) => console.error);

  appWindow.on('closed', () => {
    appWindow = null;
  });
  // appWindow.loadURL("https://admin.frandora.com");
}

const serveWebsite = (callback) => {
  const appExpress = express();

  const appDirectory = isDev ? __dirname : app.getAppPath();

  console.log({ path_app: app.getAppPath() });

  appExpress.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
  });

  appExpress.get('/*', function (req, res, next) {
    if (req?.url?.indexOf('.') === -1) {
      res.sendFile('index.html', { root: appDirectory + staticSitePath });
    } else {
      next();
    }
  });

  // app.use(serveStatic(path.join(__dirname, 'dist')));
  appExpress.use(serveStatic(path.join(appDirectory, staticSitePath)));
  // app.use(express.static("dist",{}))
  appExpress.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
  callback();
};

const configureAutoUpdate = () => {
  //setup logger
  autoUpdater.logger = require('electron-log');
  autoUpdater.logger.transports.file.level = 'info';
  autoUpdater.logger.info('App starting...');

  if (!isDev) {
    autoUpdater.checkForUpdatesAndNotify();
  }

  //setup auto updater
  autoUpdater.on('checking-for-update', () => {
    console.log({ updater: 'checking for updates........' });
  });

  autoUpdater.on('update-available', (info) => {
    console.log({
      updater: `Updates available Version: ${info.version}, Released Date: ${info.releaseDate}`
    });
    autoUpdater.downloadUpdate();
  });

  autoUpdater.on('update-not-available', () => {
    console.log({ updater: `Updates are not available at this time ......` });
  });

  autoUpdater.on('download-progress', (progress) => {
    console.log({
      updater: `Downloading Updates... ${Math.floor(progress.percent)} `
    });
  });

  autoUpdater.on('update-downloaded', (info) => {
    console.log({ updater: `Download successful ${info}` });
    autoUpdater.quitAndInstall();
  });

  autoUpdater.on('error', (info) => {
    console.log({ updater: `Error Occurred:  ${info}` });
    // updater.enabled = true;
    dialog.showMessageBox({
      title: 'Error',
      message: `Error Occurred:  ${info}`
    });
  });
};

app.on('ready', () => {
  configureAutoUpdate();
  serveWebsite(createWindows);
});
