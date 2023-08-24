<template>
<div class="about" style="padding-top: 5px;">
  <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="primary" header="POE 查价工具 V1.321.2-简体中文版" header-bg-variant="primary" header-text-variant="white" align="center">
        <b-card-text><b style="background-color: #191970;">原作者：rChinnnn</b></b-card-text>
        <b-card-text><b style="background-color: #FFFACD;">简中适配：B.R</b></b-card-text>
          <b-card-text>
          <!--<b-button @click="openLink(`https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1W4qo4V&from=181074&biz=ka#/pc`)" size="sm" variant="outline-primary" class="mb-2">
            点我加入POE腾讯服/国际服（Steam、Epic）交流频道-->
            <b-button @click="openLink(`https://qm.qq.com/cgi-bin/qm/qr?k=WjQl5fZOXbJWZycZx29g352kij4ZWFtJ&jump_from=webapi&authKey=niKgO9CuGberSNidGIiG/0dPu1dav2lttbhfNeA4n0vJ3h3ApDDhXmjvXcxSirMf`)" size="sm" variant="outline-primary" class="mb-2">
            点我加入QQ群
          </b-button>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="dark" header="使用说明" header-bg-variant="dark" header-text-variant="white" align="center">
        <b-card-text>1. 点击 <router-link to="/home" tag="button" size="sm" style="background-color: #00ff00; border-radius: 15px;">查价</router-link> 标签，选择所在的服务器和赛季</b-card-text>
        <b-card-text>2. 切换窗口回游戏</b-card-text>
        <b-card-text>3. 将鼠标悬停在物品上，按下 Ctrl+C </b-card-text>
        <b-card-text>4. 程序将自动判断此次需要查询的物品 </b-card-text>
        <b-card-text>5. 侦测到POE装备内容信息时自动呼出查价器窗口（按F5将 开启/关闭 此项功能） </b-card-text>
        <b-card-text>6. 国服支持补丁:[<a style="background-color: red;">A大V2补丁</a>、<a style="background-color: red;">>A大V3补丁</a>、<a style="background-color: red;">腾讯原版</a>]，请选择正确的补丁</b-card-text>
        <b-card-text>7. 国际服支持补丁:[<a style="background-color: red;">A大双切版汉化补丁</a>、<a style="background-color: red;">A大查价版补丁</a>、<a style="background-color: red;">编年史简体中文汉化补丁</a>]请选择正确的补丁</b-card-text>
        <b-card-text>
          <b-button @click="openLink(`https://github.com/rChinnnn/rchin-poe-trade/blob/master/README.md`)" size="sm" variant="outline-primary" class="mb-2">
            详细使用说明及基础搜寻设定请点我
          </b-button>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="danger" header="免责声明" header-bg-variant="danger" header-text-variant="white" align="center">
        <b-card-text>
          <h5>使用此程序者请自行承担所有可能后果和风险</h5>
        </b-card-text>
        <b-card-text>此程序并无修改任何内存数据</b-card-text>
        <b-card-text>运作原理为抓取 POE 游戏内对物品复制后的文字进行分析，以利快速查价</b-card-text>
        <b-card-text>连接的 API 皆为官方公开资源，请勿于短时间内快速搜寻造成伺服器负担</b-card-text>
        <b-card-text>
          <b style="font-family: monospace; background-color: red;">This product isn't affiliated with or endorsed by Grinding Gear Games in any way.</b>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="dark" header="热键功能" header-bg-variant="dark" header-text-variant="white" align="center">
        <table class="table table-sm">
          <thead class="thead-light">
            <tr>
              <th scope="col">按键</th>
              <th scope="col">功能说明</th>
            </tr>
          </thead>
          <tbody class="hotkey">
            <tr v-for="(item, index) in hotkey" :key="index" style="padding-top: 5px;">
              <td align="left">{{ item.key }}</td>
              <td align="left">{{ item.description }}</td>
            </tr>
          </tbody>
        </table>
        <b-card-text><b style="background-color: red;">注意事项：所有热键于 POE 游戏窗口内皆无作用！必须点选至查价工具视窗内才能使用各功能</b></b-card-text>
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
  data () {
    return {
      hotkey: [{
        'key': 'F5',
        'description': '开启/关闭 窗口自动呼出行为'
      }, ]
    }
  },
  methods: {
    openLink (URL) {
      shell.openExternal(URL)
    }
  },
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
