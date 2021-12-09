const { app, BrowserWindow, dialog, Menu } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');
const url = require('url');
const express = require('express');
const serveStatic = require('serve-static');
const isDev = require('electron-is-dev');

const port = 17599;
const staticSitePath = '/resources';
let updater;

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
    autoUpdater.checkForUpdates().catch((e) => {
      console.log({
        updaterCheck: `Error occurred checking for updates: ${e}`
      });
    });
  }

  //setup auto updater
  autoUpdater.on('checking-for-update', () => {
    console.log({ updater: 'checking for updates........' });
  });

  autoUpdater.on('update-available', (info) => {
    console.log({
      updater: `Updates available Version: ${info.version}, Released Date: ${info.releaseDate}`
    });

    dialog
      .showMessageBox({
        type: 'info',
        title: 'Found Updates',
        message: 'Found updates, do you want update now?',
        buttons: ['Sure', 'No']
      })
      .then((buttonIndex) => {
        if (buttonIndex === 0) {
          autoUpdater.downloadUpdate();
        } else {
          updater.enabled = true;
          updater = null;
        }
      });
  });

  autoUpdater.on('update-not-available', () => {
    console.log({ updater: `Updates are not available at this time ......` });
    dialog.showMessageBox({
      title: 'No Updates',
      message: 'Current version is up-to-date.'
    });
    updater.enabled = true;
    updater = null;
  });

  autoUpdater.on('downloads-progress', (progress) => {
    console.log({
      updater: `Downloading Updates... ${Math.floor(progress.percent)} `
    });
  });

  autoUpdater.on('update-downloaded', (info) => {
    console.log({ updater: `Download successful ${info}` });
    updater.enabled = true;
    dialog
      .showMessageBox({
        title: 'Install Updates',
        message:
          'Updates downloaded, application will now quit for updates to install...'
      })
      .then(() => {
        setImmediate(() => autoUpdater.quitAndInstall());
      });
  });

  autoUpdater.on('error', (info) => {
    console.log({ updater: `Error Occurred:  ${info}` });
    updater.enabled = true;
  });
};

function checkForUpdates(menuItem, focusedWindow, event) {
  updater = menuItem;
  updater.enabled = false;
  autoUpdater.checkForUpdates();
}

//App is ready to launch
app.on('ready', function () {
  configureAutoUpdate();
});

app.on('ready', () => {
  serveWebsite(createWindows);
});
