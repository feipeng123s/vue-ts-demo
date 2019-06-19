<template>
  <div class="t-pagination">
    <div class="t-pagination-content">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 100]"
        :page-size="pageSize"
        :total="totalPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Pagination extends Vue {
    @Prop() private totalPage!: number; // 显式赋值断言（用来告诉TypeScript一个属性会被明确赋值）

    private pageSize: number = 20;
    private currentPage: number = 1;

    private created (): void {
      this.initPage()
    }

    @Watch('$route')
    private onRouteChanged (route: object, oldRoute: object): void {
      // console.log('route changed');

      // this.initPage();
    }

    private initPage (): void {
      if (this.$route.query.pageNum) {
        this.currentPage = Number(this.$route.query.pageNum)
        this.pageSize = Number(this.$route.query.pageSize)
      } else {
        this.currentPage = 1
        this.pageSize = 20
      }
    }
    // 通过将分页信息写入route参数中来向父组件传递分页信息
    private handleSizeChange (val: number) {
      // console.log('pageSize changed');
      const data: any = this.deep(this.$route.query);
      [data.pageNum, data.pageSize] = [1, val]
      this.start(data)
    }
    private handleCurrentChange (val: number) {
      const data: any = this.deep(this.$route.query);
      [data.pageNum, data.pageSize] = [val, this.pageSize]
      this.start(data)
    }
    private start (ret: any) {
      this.$store.dispatch('paramsUrl', ret).then((res: string) => {
        this.$router.push(`${this.$route.path}${res}`)
      })
    }
    private deep (obj: object) {
      return JSON.parse(JSON.stringify(obj))
    }
}
</script>

<style scoped lang="less">
    .t-pagination{
        width: 100%;
        overflow: hidden;
    }
    .t-pagination-content{
        float: right;
        margin: 20px;
    }
</style>
