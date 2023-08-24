<template>
<div id="app">
  <div style="float: right;">
    <input type="checkbox" id="theme-toggle" v-model="nightMode">
    <label for="theme-toggle"><span></span></label>
  </div>
  <div id="nav" style="clear: both;">
    <router-link to="/home" tag="button" size="sm" style="background-color: #00ff00; border-radius: 15px;">查价</router-link>-
    <router-link to="/" tag="button" size="sm" style="background-color: #0000ff; border-radius: 15px;">关于</router-link>-
    <router-link to="/Poelink" tag="button" size="sm" style="background-color: #0000ff; border-radius: 15px;">链接</router-link>-
    <router-link to="/updatelog" tag="button" size="sm" style="background-color: #ff0000; border-radius: 15px;">更新日志</router-link>-
    <router-link to="/ninja" tag="button" size="sm" style="background-color: #ff0000; border-radius: 15px;">Builds</router-link>-
    <router-link to="/zanzhu" tag="button" size="sm" style="background-color: #ff0000; border-radius: 15px;">爱心赞助</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 5px
</style>

<script>
  
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  isEnabled as isDarkReaderEnabled
} from 'darkreader'

enableDarkMode({
  brightness: 100,
  contrast: 95,
  sepia: 5
})

export default {
  data () {
    return {
      nightMode: true
    }
  },
  created () {
    this.nightMode = localStorage.getItem('nightMode') ? JSON.parse(localStorage.getItem('nightMode')) : true
  },
  watch: {
    nightMode: function () {
      if (this.nightMode) {
        enableDarkMode({
          brightness: 100,
          contrast: 95,
          sepia: 5
        })
      } else {
        disableDarkMode()
      }
      localStorage.setItem('nightMode', JSON.stringify(this.nightMode))
      // console.log('Night Mode: ' + JSON.stringify(this.nightMode), isDarkReaderEnabled())
    }
  }
}
</script>
