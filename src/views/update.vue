<template>
  <div class="about" style="padding-top: 5px;">
    <div style="padding:5px 30px;">
      <b-card-group deck>
        <b-card border-variant="danger" header="B.Rebot-poe-trade 更新日志" header-bg-variant="danger" header-text-variant="white" align="center">
          <b-card-text><b style="background-color: #B22222;">1.重构呼出窗口呼出逻辑代码以解决之前版本中的呼出异常问题</b></b-card-text>
          <b-card-text><b style="background-color: #B22222;">2.适配新赛季物品数据</b></b-card-text>
          <b-card-text><b style="background-color: #B22222;">3.支持古神熔炉属性的查询</b></b-card-text>
          <b-card-text><b style="background-color: #B22222;">4.增加新的bug</b></b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.320.10-更新日志" align="center">
          <b-card-text>1.修复自动呼出窗口行为可能会导致一些异常的错误</b-card-text>
          <b-card-text>2.增加新的bug</b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.320.9-更新日志" align="center">
        <b-card-text>1.修复自动呼出窗口行为可能会导致一些异常的错误</b-card-text>
          <b-card-text>2.优化在输入POESESSID的输入行为</b-card-text>
          <b-card-text>>现在你只能输入32位字符，POESESSID最多32位</b-card-text>
          <b-card-text>>现在不会自动验证POESESSID，防止未粘贴成功</b-card-text>
          <b-card-text>>现在你需要在粘贴成功之后主动按下回车键（Enter）才会验证</b-card-text>
          <b-card-text>3.增加新的bug</b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.320.8-更新日志" align="center">
        <b-card-text>1.修复查询物品化野兽错误的问题</b-card-text>
          <b-card-text>2.给窗口自动呼出行为添加了一个开关按钮</b-card-text>
          <b-card-text>>在窗口聚焦时按 F5 将 开启/关闭 自动呼出行为</b-card-text>
          <b-card-text>3.优化整体逻辑内容</b-card-text>
          <b-card-text>4.增加新的bug</b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.320.7-更新日志" align="center">
        <b-card-text>1.修改自动呼出查价器窗口的逻辑判断行为已适配其他插件的使用</b-card-text>
        <b-card-text>>侦测到查价器窗口失去焦点时会将查价器窗口自动最小化</b-card-text>
        <b-card-text>>侦测到用户复制POE装备内容信息时会自动呼出查价器窗口</b-card-text>
        <b-card-text>>查价器窗口自动呼出时会将剪切板内容置空 </b-card-text>
        <b-card-text>2.优化更新窗口的前往踩蘑菇论坛按钮点击事件，会自动打开浏览器窗口</b-card-text>
        <b-card-text>3.增加新的bug</b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.320.6-更新日志" align="center">
        <b-card-text>1.取消 Ctrl+X 呼出查价器 </b-card-text>
        <b-card-text>2.新增侦测到用户按下 Ctrl+C 时自动呼出查价器窗口</b-card-text>
        <b-card-text>3.增加新的bug</b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.320.4-更新日志" align="center">
        <b-card-text>1.新增 Ctrl+X 呼出查价器（先这样吧，技术有限） </b-card-text>
        <b-card-text>2.搜索传奇装备时，取消默认等级勾选</b-card-text>
        <b-card-text>3.增加新的bug</b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.320.3-更新日志" align="center">
        <b-card-text>1.修复amsco2汉化补丁查询长老碎片的错误 </b-card-text>
        <b-card-text>2.新赛季物品同步（已全部同步）</b-card-text>
        <b-card-text>3.查价器启动和输入ID的优化（减少某些错误）</b-card-text>
        <b-card-text>4.增加新的bug</b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.320.2-更新日志" align="center">
        <b-card-text>1.增加查询可选货币-神圣石 </b-card-text>
        <b-card-text>2.新赛季物品，词缀属性同步（国际服汉化暂未全部同步，请等待后续）</b-card-text>
        <b-card-text>3.修复国际服赛季列表选项会出现XBOX赛季的多余选项</b-card-text>
        <b-card-text>4.爱心赞助分离单独页面，移除首页的显示</b-card-text>
        <b-card-text>5.其他些许优化</b-card-text>
        <b-card-text>6.增加新的bug</b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.320.1-更新日志" align="center">
        <b-card-text>1.查价器版本号变更、预加载新赛季内容 </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.11-更新日志" align="center">
        <b-card-text>1.修复上个版本查询传奇装备显示非传奇导致不能查询的错误 </b-card-text>
        <b-card-text>2.重新修正上个版本地图匹配逻辑 </b-card-text>
        <b-card-text>3.修正A大国际服双切汉化补丁读取瓦尔宝石出错的问题 </b-card-text>
        <b-card-text>4.其他优化 </b-card-text>
        <b-card-text>5.增加新的bug </b-card-text>
        <b-card-text>6.被迫再次更新版本修复错误 </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.10-更新日志" align="center">
        <b-card-text>1.修复国际服双切版补丁查询地图类出错的问题 </b-card-text>
        <b-card-text>2.修复国服简改V2补丁查询地图出错的问题 </b-card-text>
        <b-card-text>3.其他优化 </b-card-text>
        <b-card-text>4.增加新的bug </b-card-text>
        <b-card-text>5.待修复其他错误 </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.9-更新日志" align="center">
        <b-card-text>1.修正上个版本镜像桌台词缀读取空白的问题 </b-card-text>
        <b-card-text>2.修复阿佐亚特编年史词缀无法读取的问题 </b-card-text>
        <b-card-text>3.增加新的bug </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.8-更新日志" align="center">
        <b-card-text>1.增加对镜像桌台查询词缀的支持 </b-card-text>
        <b-card-text>2.修复在A大双切汉化补丁下读取替代品质宝石的错误 </b-card-text>
        <b-card-text>3.增加新的bug </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.7-更新日志" align="center">
        <b-card-text>1.增加自动更新功能 </b-card-text>
        <b-card-text>2.优化数据文档结构减少体积 </b-card-text>
        <b-card-text>3.增加新的bug </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.6-更新日志" align="center">
        <b-card-text>1.技能宝石查询逻辑更改，自动代入技能等级，技能品质  </b-card-text>
        <b-card-text>2.修复技能判定魅影品质宝石和瓦尔宝石读取出错的问题 </b-card-text>
        <b-card-text>3.修复查询充能罗盘词缀读取的问题  </b-card-text>
        <b-card-text>4.修复不能删除POESESSID的问题 </b-card-text>
        <b-card-text>5.修复某些物品基底不能正常读取的问题 </b-card-text>
        <b-card-text>6.优化物品判定字符取值逻辑已适配A大补丁的问题 </b-card-text>
        <b-card-text>7.优化某些显示内容 </b-card-text>
        <b-card-text>8.修复瓦尔技能宝石读取出错的问题</b-card-text>
        <b-card-text>9.检测更新功能更改为更新日志 </b-card-text>
        <b-card-text>10.增加新的bug </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.5-更新日志" align="center">
        <b-card-text>1.紧急更新大量查询错误  </b-card-text>
        <b-card-text>2.紧急更新传奇装备查询错误 </b-card-text>
        <b-card-text>3.修复腾讯服使用[amsco简改V2（改进版）]补丁时查询精华等一些通货读取错误  </b-card-text>
        <b-card-text>4.修复上一版本的更新导致命运卡无法读取的错误 </b-card-text>
        <b-card-text>5.增加新的BUG.... </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.4-更新日志" align="center">
        <b-card-text>1.修复适配补丁数据类的异常错误 </b-card-text>
        <b-card-text>2.增加镜像桌台查询时的词缀读取（未实际测试，有错误及时反馈）</b-card-text>
        <b-card-text>3.其他修复 </b-card-text>
        <b-card-text>4.增加检测更新功能（暂未应用到实际版本中，预计后续版本中开放版本更新）</b-card-text>
        <b-card-text>5.增加新的BUG.... </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.3-更新日志" align="center">
        <b-card-text>1.拓展腾讯服查价支持A大简改v2（改进版）补丁</b-card-text>
        <b-card-text>2.拓展国际服查价支持A大双切版补丁</b-card-text>
        <b-card-text>3.修复大量数据错误</b-card-text>
        <b-card-text>4.其他判断逻辑性修正</b-card-text>
        <b-card-text>5.增加新的bug.....</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header="V1.319.2-更新日志" align="center">
        <b-card-text>1.添加新赛季内容 </b-card-text>
        <b-card-text>2.修复某些逻辑性错误 </b-card-text>
        <b-card-text>3.其他修复 </b-card-text>
        <b-card-text>4.增加新的bug.....</b-card-text>
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
  