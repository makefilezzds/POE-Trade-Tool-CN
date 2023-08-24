<template>
    <div class="about" style="padding-top: 5px;">
      <div style="padding:5px 30px;">
        <b-card-group deck>
          <b-card border-variant="danger" header="B.Rebot-poe-trade 爱心赞助" header-bg-variant="danger" header-text-variant="white" align="center">
            <!--<b-card-text><b style="background-color: #c9daf8;">B.Rebot已经能满足大部分的需求，且高度适配了国际服汉化补丁和国服功能补丁。</b></b-card-text>
            <b-card-text><b style="background-color: #c9daf8;">S20赛季的查价是我耗费精力去修复、适配、完善最多的一个</b></b-card-text>
            <b-card-text><b style="background-color: #c9daf8;">当然带来的也是非常完美的表现</b></b-card-text>
            <b-card-text><b style="background-color: #c9daf8;">除去某些诟病，已经表现的非常不错</b></b-card-text>
            <b-card-text><b style="background-color: #c9daf8;">由于个人精力不足，暂停后续的更新和修复</b></b-card-text>
            <b-card-text><b style="background-color: #c9daf8;">S21赛季可能不会再有更新了。</b></b-card-text>
            <b-card-text><b style="background-color: #c9daf8;">感谢各位积极反馈错误并配合进行测试的友友</b></b-card-text>
            <b-card-text><b style="background-color: #c9daf8;">软件的进步离不开大家的错误反馈</b></b-card-text>
            <b-card-text><b style="background-color: #c9daf8;">感谢大家的支持！有缘再见</b></b-card-text>-->
          </b-card>
        </b-card-group>
      </div>
      <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="本程序用爱发电   感谢你的扫码赞助 " align="center">
        <b-card-text>原作者已在 GitHub 上开源并授权许可更改，欢迎分享给你的小伙伴使用</b-card-text>
        <b-card-text>也欢迎赞助一下，用于<a style="background-color: red;">继续开发的动力</a>支援</b-card-text>
        <div style="display:flex;justify-content:center;">
          <div class="num">
            <img src="../assets/wechat.png">
          </div>
          <div class="num">
            <img src="../assets/alipay.png">
          </div>
        </div>
      </b-card>
    </b-card-group>
  </div>
  </div>
    </template>
    
    <script>
    const {
      clipboard,
      shell
    } = require('electron')
  
    export default {
      methods: {
        openLink (URL) {
          shell.openExternal(URL)
        }
      }
    }
    </script>
    
    <style>
    .card-body {
      padding: 10px !important;
    }
    
    .card-text p {
      margin-block-start: 0.5em;
      margin-block-end: 0em;
    }
    
    tbody.hotkey>tr>td {
      padding-top: 8px;
      padding-left: 25px;
    }
    .num {
        margin-right: 20px;
         width: 200px !important;
         height: 200px !important;
        }
    </style>
