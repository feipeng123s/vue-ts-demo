<template>
  <div class="prompt-content">
    <div class="t-container-two">
      <div class="prompt-header">帮助和服务</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Prompt extends Vue {}
</script>

<style lang="less" scoped>
.prompt-content{
  width: 100%;
  height: 100%;
  overflow: hidden;

  .t-container-two{
    width: 100%;
    overflow: auto;
    background: #fff;

    .prompt-header{
      padding-left: 20px;
      line-height: 50px;
      font-size: 12px;
      border-bottom: 1px solid #f2f2f2;
      box-sizing: border-box;
    }
  }
}
</style>
