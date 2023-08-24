<template>
<div class="about" style="padding-top: 5px;">   
  <div style="padding:5px 30px;">
    <b-card-group deck>
      <b-card border-variant="primary" header="关于流放之路的常用网址以及工具链接" header-border-variant="primary" header-text-variant="white" align="center">
        <b-card-text>【感谢Sharket整理提供 v2021.8.3】</b-card-text>
        <b-card-text>          
          <b-button  size="sm" variant="info" class="mb-2" style="color:yellow">
           以下排名不分先后，个别网站需要科学上网
          </b-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b-button size="sm" class="mb-2" @click="openLink(`https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1W4qo4V&from=181074&biz=ka#/pc`)" variant="info">☞ 反馈更新收录</b-button>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div> 
  
  <div style="padding:5px 30px;">
    <b-card border-variant="success" header="常用论坛" header-border-variant="success" header-text-variant="white" align="center">
      <b-card-text>          
        <b-button-group style="width: 556px;">
        <b-button id="1-1" @click="openLink(`http://bbs.17173.com/forum-9987-1.html`)" variant="outline-success" style="width: 139px;">17173论坛</b-button>
         <!-- <b-tooltip target="1-1" variant="success" placement="topright">这里是一个小提示</b-tooltip>  -->
        <b-button id="1-2" @click="openLink(`https://www.caimogu.net/circle/329.html`)" variant="outline-success" style="width: 139px;">采蘑菇论坛</b-button>
          <!-- <b-tooltip target="1-2" variant="success" placement="topright">这里是一个小提示2</b-tooltip>  -->
        <b-button  @click="openLink(`http://bbs.ngacn.cc/thread.php?fid=-5080470`)" variant="outline-success" style="width: 139px;">NGA论坛</b-button>
        <b-button  @click="openLink(`https://m.gamer.com.tw/forum/B.php?bsn=18966`)" variant="outline-success" style="width: 139px;">巴哈姆特(Tw)</b-button>
        </b-button-group>
      </b-card-text> 
      <b-card-text>          
        <b-button-group style="width: 556px;">
        <b-button  @click="openLink(`https://poe.game.qq.com/forum/view-forum/1`)" variant="outline-success" style="width: 139px;">国服官方论坛 </b-button>
        <b-button  @click="openLink(`https://www.pathofexile.com/forum`)" variant="outline-success" style="width: 139px;">国际服论坛(En)</b-button>
        <b-button  @click="openLink(`https://www.reddit.com/r/pathofexile`)" variant="outline-success" style="width: 139px;">Reddit(En)</b-button>
        <b-button  @click="openLink(`https://twitter.com/pathofexile`)" variant="outline-success" style="width: 139px;">Twitter(En)</b-button>
        </b-button-group>
      </b-card-text>       
    </b-card>    
  </div>
  <div style="padding:5px 30px;">
    <b-card border-variant="danger" header="在线工具" header-border-variant="danger" header-text-variant="white" align="center">
      <b-card-text>          
        <b-button-group style="width: 556px;">
        <b-button  @click="openLink(`https://www.craftofexile.com/?cl=cn`)" variant="outline-warning" style="width: 139px;">【常用】<br>做装模拟</b-button>
        <b-button  @click="openLink(`https://www.pathofexile.com/trade`)" variant="outline-warning" style="width: 139px;">【国际服】<br>在线集市</b-button>
        <b-button  @click="openLink(`http://poe.ninja/builds`)" variant="outline-warning" style="width: 139px;">BD查询(En)<br>Poe.ninja</b-button> 
        <b-button  @click="openLink(`https://poe.game.qq.com/trade`)" variant="outline-warning" style="width: 139px;">【国服】<br>在线集市</b-button> 
        </b-button-group>
      </b-card-text>
      <b-card-text>          
        <b-button-group style="width: 556px;">       
        <b-button  @click="openLink(`http://www.timtips.com/buildbrowser`)" variant="outline-danger" style="width: 139px;">BD查询(En)<br>Timtips</b-button>        
        <b-button  @click="openLink(`https://poe-profile.info/`)" variant="outline-danger" style="width: 139px;">BD查询(En)<br>Poe-profile</b-button>
        <b-button  @click="openLink(`https://www.poebuilds.cc/`)" variant="outline-danger" style="width: 139px;">BD查询(En)<br>Poebuilds</b-button>
         <b-button  @click="openLink(`http://www.poelab.com`)" variant="outline-danger" style="width: 139px;">每日迷宫(En)</b-button>       
        </b-button-group>
      </b-card-text>
      <b-card-text>          
        <b-button-group style="width: 556px;">
          <b-button  @click="openLink(`https://poe.qq.com/cp/a20181107hero/index.shtml?url=challenge`)" variant="outline-danger" style="width: 139px;">【国服】<br>英雄榜</b-button>        
        <b-button  @click="openLink(`http://poe.qq.com/events.shtml`)" variant="outline-danger" style="width: 139px;">【国服】<br>活动汇总</b-button>
        <b-button  @click="openLink(`https://poe.qq.com/cp/a20170510welfare`)" variant="outline-danger" style="width: 139px;">【国服】<br>福利商城</b-button>
        <b-button  @click="openLink(`https://www.caimogu.net/poe/garden.html`)" variant="outline-danger" style="width: 139px;">采蘑菇工艺交易</b-button>                 
        </b-button-group>
      </b-card-text> 
      <b-card-text>          
        <b-button-group style="width: 556px;">        
        <b-button  @click="openLink(`https://www.liufangzhilu.com/forum.php?mod=viewthread&tid=27`)" variant="outline-danger" style="width: 139px;">【过滤】<br>模板编辑</b-button>        
        <b-button  @click="openLink(`https://www.liufangzhilu.com/filtration`)" variant="outline-danger" style="width: 139px;">【过滤】<br>在线编辑</b-button>
        <b-button  @click="openLink(`https://poedb.tw/cn/passive-skill-tree/`)" variant="outline-danger" style="width: 139px;">在线天赋树</b-button>                  
        <b-button  @click="openLink(`https://wraeclast.com/`)" variant="outline-danger" style="width: 139px;">Wraeclast(En)</b-button>
        </b-button-group>
      </b-card-text> 
      <b-card-text>          
        <b-button-group style="width: 556px;">
        <b-button  @click="openLink(`https://pathofpoe.com`)" variant="outline-danger" style="width: 139px;">热门升华点(En)</b-button>
        <b-button  @click="openLink(`https://poemap.live/`)" variant="outline-danger" style="width: 139px;">地图交易(En)</b-button>
        <b-button  @click="openLink(`https://www.liufangzhilu.com/huanse`)" variant="outline-danger" style="width: 139px;">幻色概率计算</b-button>
        <b-button  @click="openLink(`http://blight.raelys.com`)" variant="outline-danger" style="width: 139px;">圣油模拟器(En)</b-button>
        </b-button-group>
      </b-card-text>       
    </b-card>    
  </div>
  <div style="padding:5px 30px;">
    <b-card border-variant="primary" header="百科WIKI和常用补丁和工具" header-border-variant="primary" header-text-variant="white" align="center">
      <b-card-text>          
        <b-button-group style="width: 556px;">
        <b-button  @click="openLink(`https://poedb.tw/cn/`)" variant="outline-primary" style="width: 139px;">流亡编年史</b-button>
        <b-button  @click="openLink(`http://pathofexile.gamepedia.com/`)" variant="outline-primary" style="width: 139px;">POE维基(En)</b-button>
        <b-button  @click="openLink(`https://poedb.tw/chinese`)" variant="outline-primary" style="width: 139px;">编年史汉化</b-button>
        <b-button  @click="openLink(`https://www.caimogu.net/post/18616.html`)" variant="outline-primary" style="width: 139px;">A大功能补丁</b-button>
        </b-button-group>
      </b-card-text> 
      <b-card-text>          
        <b-button-group style="width: 556px;">
        <b-button  @click="openLink(`http://bbs.17173.com/thread-10923987-1-1.html`)" variant="outline-primary" style="width: 139px;">PoeCharm</b-button>               
        <b-button  @click="openLink(`https://www.caimogu.net/post/16349.html`)" variant="outline-primary" style="width: 139px;">Ninja汉化</b-button>
        <b-button  @click="openLink(`https://www.caimogu.net/post/23813.html`)" variant="outline-primary" style="width: 139px;">地图补丁(左向)</b-button> 
        <b-button  @click="openLink(`https://www.caimogu.net/post/16674.html`)" variant="outline-primary" style="width: 139px;">POB En2CN</b-button>
        </b-button-group>
      </b-card-text>       
    </b-card>    
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
    openLink(URL) {
      shell.openExternal(URL)
    },
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
