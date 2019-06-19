<template>
  <div class="t-container">
    <div class="t-navbar-wrap">
      <Navbar></Navbar>
    </div>
    <div class="t-header-wrap">
      <div class="header-content">
        {{$route.meta.title || 'Title'}}
      </div>
    </div>
    <div class="t-content-wrap">
      <div class="t-main-content">
        <MainContent></MainContent>
      </div>
      <div class="t-prompt-content">
        <Prompt></Prompt>
      </div>
    </div>
    <div class="t-footer-wrap">欢迎来到feipeng123s后台管理系统</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Navbar, MainContent, Prompt } from '@/views/layout/content'

@Component({
  components: {
    Navbar,
    MainContent,
    Prompt
  }
})

export default class Layout extends Vue {}

</script>

<style lang="less" scoped>
.t-container{
  width: 100%;
  height: 100%;
  padding: 0 200px;
  min-height: 900px;
  min-width: 750px;
  box-sizing: border-box;

  .t-navbar-wrap{
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    box-shadow: 0 0 1px 0 rgba(0,0,0,.2);
    z-index: 99;
  }

  .t-header-wrap{
    line-height: 48px;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 10px;
    box-sizing: border-box;
    overflow: hidden;

    .header-content{
      cursor: pointer;
      margin-left: 15px;
      border-bottom: 2px solid #fff;
      margin-right: 25px;
      float: left;
      color: #666;
    }
  }

  .t-content-wrap{
    position: relative;
    min-height: 100%;
    padding: 61px 10px 50px 10px;
    margin: -51px 0 -50px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .t-main-content{
      background: #fff;
      flex: 1;
    }

    .t-prompt-content{
      position: absolute;
      top: 0;
      bottom: 0;
      right: -200px;
      width: 200px;
      background: #fff;
      box-shadow: 0 0 1px 0 rgba(0,0,0,.2);
      z-index: 99;
    }
  }

  .t-footer-wrap{
    text-align: center;
    line-height: 30px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: rgb(51, 51, 51);
  }
}
</style>
