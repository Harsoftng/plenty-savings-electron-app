const { app, BrowserWindow, protocol } = require('electron')
const { autoUpdater } = require('electron-updater')
const path = require('path')
const url = require('url')
const express = require('express')
const serveStatic = require('serve-static')
const isDev = require('electron-is-dev')

const port = 17599
const staticSitePath = '/resources'

//setup logger
autoUpdater.logger = require('electron-log')

//setup auto updater
autoUpdater.on('checking-for-update', () => {
  console.log({ updater: 'checking for updates........' })
})

autoUpdater.on('update-available', (info) => {
  console.log({ updater: `Updates available Version: ${info.version}, Released Date: ${info.releaseDate}` })
})

autoUpdater.on('update-not-available', () => {
  console.log({ updater: `Updates are not available at this time ......` })
})

autoUpdater.on('downloads-progress', (progress) => {
  console.log({ updater: `Downloading Updates... ${Math.floor(progress.percent)} ` })
})

autoUpdater.on('update-downloaded', (info) => {
  console.log({ updater: `Download successful ${info}` })
  autoUpdater.quitAndInstall()
})

autoUpdater.on('error', (info) => {
  console.log({ updater: `Error Occurred:  ${info}` })
})

function createWindows () {

  if (!isDev) {
    autoUpdater.checkForUpdates().catch(e => {
        console.log({updaterCheck: `Error occurred checking for updates: ${e}`});
    });
  }

  let appWindow = new BrowserWindow({
    alwaysOnTop: false,
    title: 'OakShield Thrift App',
    minWidth: 1200,
    minHeight: 700,
    fullscreen: true
  })

  appWindow.loadURL(`http://localhost:${port}`).catch(reason => console.error)

  appWindow.on('closed', () => {
    appWindow = null
  })
  // appWindow.loadURL("https://admin.frandora.com");
}

const serveWebsite = (callback) => {
  const appExpress = express()

  const appDirectory = isDev ? __dirname : app.getAppPath()

  console.log({ path_app: app.getAppPath() })

  appExpress.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url)
    next()
  })

  appExpress.get('/*', function (req, res, next) {
    if (req?.url?.indexOf('.') === -1) {
      res.sendFile('index.html', { root: appDirectory + staticSitePath })
    } else {
      next()
    }
  })

  // app.use(serveStatic(path.join(__dirname, 'dist')));
  appExpress.use(serveStatic(path.join(appDirectory, staticSitePath)))
  // app.use(express.static("dist",{}))
  appExpress.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })
  callback()
}

app.on('ready', () => {
  serveWebsite(createWindows)
})

