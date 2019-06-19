<template>
  <div class="t-container-navbar">
    <!-- 一级菜单 -->
    <div class="t-container-one">
      <div class="t-container-logo"></div>
      <div class="t-navbar-menu">
        <a tag="div" :href="'/home'">
          <div class="t-navbar-menu-active">
            <i class="el-icon-printer"></i>
            <span>&nbsp;系统</span>
          </div>
        </a>
      </div>
    </div>
    <!-- 二级菜单 -->
    <div class="t-container-two">
      <div class="t-container-header">系统</div>
      <nav class="t-container-content">
        <router-link
          v-for="(item,index) in subMenuList"
          :key="index"
          tag="div"
          class="t-container-list"
          :to="item.href"
        >
          {{item.name}}
        </router-link>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  private subMenuList = [
    { id: 1, name: '首页', href: '/home' },
    { id: 2, name: '权限列表', href: '' },
    { id: 3, name: '新增列表', href: '' },
    { id: 4, name: '用户列表', href: '' }
  ];
}
</script>

<style lang="less" scoped>
.t-container-navbar{
  width: 100%;
  height: 100%;
  overflow: hidden;

  .t-container-one{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 90px;
    background: #444;
    overflow: hidden;
    overflow-y: auto;

    .t-container-logo{
      width: 90px;
      height: 63px;
      overflow: hidden;
    }

    .t-navbar-menu{
      font-size: 14px;
      line-height: 36px;
      margin-bottom: 14px;
      cursor: pointer;
    }
    .t-navbar-menu-active{
      color: black;
      padding-left: 18px;
      background: #f8f8f8;
    }
  }

  .t-container-two{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 90px;
    width: 110px;
    background: #fff;
    overflow: hidden;
    overflow-y: auto;

    .t-container-header{
      padding-left: 20px;
      line-height: 50px;
      font-size: 14px;
      border-bottom: 1px solid #f2f2f2;
      box-sizing: border-box;
    }

    .t-container-content{
      padding: 13px 10px;
      width: 110px;
      box-sizing: border-box;

      .t-container-list{
        color: #666;
        display: block;
        padding: 0 10px;
        font-size: 14px;
        line-height: 36px;
        margin-bottom: 14px;
        overflow: hidden;
        cursor: pointer;
        list-style-type: none;
        border-radius: 2px;
      }
      .t-container-list:hover{
        color: #38f;
      }
      .t-container-list:active{
        color: #444;
        background: #f8f8f8;
      }
    }
  }

  // 隐藏滚动条
  .t-container-one::-webkit-scrollbar,
  .t-container-two::-webkit-scrollbar{
    display: none;
  }
}
</style>
