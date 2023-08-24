const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  lintOnSave: false, // 取消 eslint
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',  
    port: 3030
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "publish": [
          {
            "provider": "generic",
            "url": "http://t9y9tvuoh.xghost.fun/brupdate/",
          }
        ],
        "releaseInfo":{
          "releaseNotesFile":"release-1.0.0.md"
        },
        nsis: {
          oneClick: false, // 是否一键安装
          allowToChangeInstallationDirectory: true // 允许用户选择安装位置
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  }
};
