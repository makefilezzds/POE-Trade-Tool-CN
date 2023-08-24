'use strict'

import { app, protocol, BrowserWindow, globalShortcut, Menu, dialog, ipcMain, shell, clipboard} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const { autoUpdater } = require('electron-updater')
const log = require('electron-log')
import path from 'path'
import hotkeys from "hotkeys-js";
import { BIconExclamationSquareFill } from 'bootstrap-vue'
const server = require('./server');
const os = require('os');
const localShortcut = require('electron-localshortcut');
let clipboardIntervalID;
global.copyTextsoff = 1;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{
  scheme: 'app',
  privileges: {
    secure: true,
    standard: true,
    corsEnabled: true,
  }
}])

autoUpdater.setFeedURL({
  "provider": "generic",
  "url": "http://t9y9tvuoh.xghost.fun/brupdate/", // 一定要保证该地址下面包含lasted.yml文件和需要更新的exe文件
})

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: isDevelopment ? 1500 : 650,
    height: isDevelopment ? 850 : 930,
    minWidth: isDevelopment ? 100 : 600,
    minHeight: 500,
    maxWidth: isDevelopment ? 2000 : 650,
    autoHideMenuBar: true,
    fullscreenable: isDevelopment ? true : false,
    maximizable: true,
    webPreferences: {
      defaultFontFamily: {
        standard: "Microsoft YaHei"
      },
      defaultFontSize: 14,
      nodeIntegration: true,
      webSecurity: false,
      contextIsolation: false,
      // nodeIntegrationInWorker: true
      // preload: path.join(app.getAppPath(), 'preload.js')
    },
    icon: `${__static}/app.ico`
  })
  
  mainWindow.removeMenu()

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    mainWindow.loadURL('app://./index.html')
  }

  mainWindow.on('closed', () => {
    mainWindow = null
    
  })
  mainWindow.on('blur', ()=>{
    if(copyTextsoff == 1){
      mainWindow.minimize();
      startClipboardCheck();
    }
  })

  mainWindow.on('focus', () => {
  })

  localShortcut.register('F5', () => {
    console.log('F5 is pressed, setAlwaysOnTop(true)')
    if(copyTextsoff == 1){
      copyTextsoff = 0;
      clearInterval(clipboardIntervalID); 
      dialog.showMessageBox({
        type: 'info',
        title: '热键',
        message: '已关闭窗口自动呼出功能',
      })
    } else {
      copyTextsoff = 1;
      startClipboardCheck();
      dialog.showMessageBox({
        type: 'info',
        title: '热键',
        message: '已开启窗口自动呼出功能',
      })
    }
    //mainWindow.setOpacity(mainWindow.getOpacity() === 1 ? 0.8 : mainWindow.getOpacity())
    //mainWindow.setAlwaysOnTop(true, 'normal');
  })
  /*localShortcut.register('F6', () => {
    console.log('F6 is pressed, setAlwaysOnTop(false), setOpacity(1)')
    mainWindow.setOpacity(1)
    mainWindow.setAlwaysOnTop(false);
  })
  localShortcut.register('PageUp', () => {
    console.log('PageUp is pressed, setOpacity(+ 0.05)')
    mainWindow.setOpacity(mainWindow.getOpacity() + 0.05)
  })
  localShortcut.register('PageDown', () => {
    if (mainWindow.getOpacity() <= 0.4) {
      return
    }
    console.log('PageDown is pressed, setOpacity(- 0.05)')
    mainWindow.setOpacity(mainWindow.getOpacity() - 0.05)
  })*/
}

function startClipboardCheck() {
  clipboardIntervalID = setInterval(() => {
      const text = clipboard.readText();//读取剪切板内容
      if (text && text.trim()) {
          setTimeout( function () {//添加少量时间缓冲
              if (text.toLowerCase().includes("稀 有 度:")) {//如果检测到"稀 有 度:"文本，则执行成功提示。
                  mainWindow.show();//呼出窗口
                  clipboard.clear();//清除剪切板内容以确保下次复制内容生效
                  console.log("Success!");
              } else {//如果不包含则执行失败提示。
                console.log("Fail!");
              }
          }, 200);//时限调高以确保操作完成
      }
  }, 1000);//每秒定时
}
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  copyTextsoff = 0;
  clearInterval(clipboardIntervalID); 
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.whenReady().then(() => {
  installExtension(VUEJS_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installExtension(VUEJS_DEVTOOLS)
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  }
  
  setTimeout(() => {
    // 检测是否有更新
    autoUpdater.checkForUpdates()
  }, 1000)
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

if (!process.env.WEBPACK_DEV_SERVER_URL) {
  autoUpdater.autoDownload = false

  autoUpdater.signals.updateDownloaded(() => {})
  autoUpdater.on('error', (error) => {
    log.warn('检查更新失败: ' + error == null ? 'unknown' : (error.stack || error).toString())
    // dialog.showErrorBox('Error: ', error == null ? 'unknown' : (error.stack || error).toString())
  })

  autoUpdater.on('update-available', (info) => {
    var releaseNotes=info.releaseNotes
    // var appInfo = {
    //   info: info.version,
    //   files: info.files,
    //   path: info.path,
    //   sha512: info.sha512,
    //   releaseDate: info.releaseDate
    // }
    dialog.showMessageBox({
      type: 'info',
      title: '更新提示',
      message: '发现新版本'+info.version+"("+(info.files[0].size/1024/1024).toFixed(2)+"MB)"+"\r\n\r\n"+releaseNotes,
      buttons: ['前往踩蘑菇论坛', '关闭此次提示']
    }).then((res) => {
      log.warn('index:' + res.response)
      if (res.response === 1) {
        log.warn('选择不升级!')
      } else {
        log.warn('选择升级!')
        shell.openExternal(`https://www.caimogu.cc/post/191094.html`)
      }
    })
  })

  // 检查更新时触发
  autoUpdater.on('update-available', (res) => {
    log.warn('检查更新时触发')
    // log.warn(res)
    // dialog.showMessageBox({
    //   title: '检查更新',
    //   message: '正在检查更新'
    // })
  })

  // 没有可用更新
  autoUpdater.on('update-not-available', () => {
    log.warn('没有可用更新')
    // dialog.showMessageBox({
    //   title: '已是最新版',
    //   message: '当前版本是最新版本。'
    // })
  })

  // 安装更新
  autoUpdater.on('update-downloaded', (res) => {
    // log.warn(res)
    log.warn('下载完毕！提示安装更新')
    dialog.showMessageBox({
      title: '升级提示！',
      message: '已自动升级为最新版，请重启应用！'
    }, () => {
      log.warn('确认安装')
      setImmediate(() => autoUpdater.quitAndInstall(true, true))
    })
  })

  // 下载进度
  // autoUpdater.on('download-progress', (event) => {
  //   log.warn(event.percent)
  // })
}
