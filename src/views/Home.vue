<template>
  <div class="home">
    <div ref="histogram" class="chart"></div>
    <div ref="line" class="chart"></div>
    <div ref="pie" class="chart"></div>
    <!-- <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="100"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="(item,index) in layout"
        :key="index"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        class="test-grid-item"
      >
      </grid-item>
    </grid-layout> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import echarts from 'echarts'
import VueGridLayout from 'vue-grid-layout'

const testLayout = [
  { 'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '0' },
  { 'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': '1' },
  { 'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2' },
  { 'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': '3' },
  { 'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': '4' },
  { 'x': 10, 'y': 0, 'w': 2, 'h': 3, 'i': '5' },
  { 'x': 0, 'y': 5, 'w': 2, 'h': 5, 'i': '6' },
  { 'x': 2, 'y': 5, 'w': 2, 'h': 5, 'i': '7' },
  { 'x': 4, 'y': 5, 'w': 2, 'h': 5, 'i': '8' },
  { 'x': 6, 'y': 3, 'w': 2, 'h': 4, 'i': '9' },
  { 'x': 8, 'y': 4, 'w': 2, 'h': 4, 'i': '10' },
  { 'x': 10, 'y': 4, 'w': 2, 'h': 4, 'i': '11' },
  { 'x': 0, 'y': 10, 'w': 2, 'h': 5, 'i': '12' },
  { 'x': 2, 'y': 10, 'w': 2, 'h': 5, 'i': '13' },
  { 'x': 4, 'y': 8, 'w': 2, 'h': 4, 'i': '14' },
  { 'x': 6, 'y': 8, 'w': 2, 'h': 4, 'i': '15' },
  { 'x': 8, 'y': 10, 'w': 2, 'h': 5, 'i': '16' },
  { 'x': 10, 'y': 4, 'w': 2, 'h': 2, 'i': '17' },
  { 'x': 0, 'y': 9, 'w': 2, 'h': 3, 'i': '18' },
  { 'x': 2, 'y': 6, 'w': 2, 'h': 2, 'i': '19' }
]

@Component({
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
})

export default class Home extends Vue {
  chartDataSet = [
    ['产品', '销量'],
    ['衬衫', 5],
    ['羊毛衫', 20],
    ['雪纺衫', 36],
    ['裤子', 10],
    ['高跟鞋', 10],
    ['袜子', 20]
  ]
  layout = testLayout
  created () {
    this.$nextTick().then(() => this.createChart())
  }

  createChart () {
    // 柱状图
    const histogram: any = this.$refs.histogram
    const histogramChart = echarts.init(histogram)
    histogramChart.setOption({
      title: {
        text: '柱状图'
      },
      tooltip: {},
      legend: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {
        name: '销量'
      },
      series: [
        {
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })

    // 折线图
    const line: any = this.$refs.line
    const lineChart = echarts.init(line)
    lineChart.setOption({
      title: {
        text: '折线图'
      },
      tooltip: {},
      legend: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {
        name: '销量'
      },
      series: [
        {
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })

    // 饼图
    const pie: any = this.$refs.pie
    const pieChart = echarts.init(pie)
    pieChart.setOption({
      title: {
        text: '饼图'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          roseType: 'angle',
          radius: '55%',
          data: [
            { value: 235, name: '视频广告' },
            { value: 274, name: '联盟广告' },
            { value: 310, name: '邮件营销' },
            { value: 335, name: '直接访问' },
            { value: 400, name: '搜索引擎' }
          ]
        }
      ]
    })
  }
}
</script>
<style lang="less" scoped>
.home {
  padding: 10px;
  box-sizing: border-box;
}
.test-grid-item{
  border: 1px solid #c6c6c6;
}
.chart{
  display:inline-block;
  height:400px;
  width:600px;
}
</style>
