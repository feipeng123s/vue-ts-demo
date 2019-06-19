<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  private username: string = '';

  public login () {
    this.$api.accountApi.login('admin', '123').then((res: any) => {
      this.$api.valueApi.getValues('testValue')
    })
    // const vm = this;
    // this.$api.accountApi.login('admin', 'abc').then((res: any) => {
    //   if (res.success) {
    //     localStorage.setItem('access_token', res.data.token);
    //     // vm.$message('登陆成功');
    //   } else {
    //     // vm.$message('登陆失败');
    //   }
    // });
  }

  private created () {
    this.login()
    this.$message('hahaha')
  }
}
</script>
<style lang="less" scoped>

</style>
