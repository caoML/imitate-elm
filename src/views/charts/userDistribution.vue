<template>
    <div ref="main" style="height: 500px;">
        <h1>tt</h1>
    </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'charts',
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {
      var myChart = echarts.init(this.$refs.main)
      myChart.setOption({
        legend: {
          data: ['视频广告', '联盟广告', '邮件营销', '直接访问', '搜索引擎']
        },
        title: {
          text: 'ECharts 入门示例'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              {value: 235, name: '视频广告'},
              {value: 274, name: '联盟广告'},
              {value: 310, name: '邮件营销'},
              {value: 335, name: '直接访问'},
              {value: 400, name: '搜索引擎'}
            ]
          }
        ]
      })
    }
}
</script>

<style scoped>

</style>