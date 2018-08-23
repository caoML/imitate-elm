<template>
    <div :loading="loading" element-loading-text="拼命加载中" ref="main" style="height: 500px;">
        <h1>用户分布表</h1>
    </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'charts',
    data() {
      return {
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
            ]
          }
        ],
        loading: true
      }
    },
    methods: {

    },
    mounted() {
      this.$http.get('https://elm.cangdu.org/v1/user/city/count').then(
        result => {
          var cities = result.body.user_city
          this.series[0].data.push({value: cities.beijing, name: '北京'})
          this.series[0].data.push({value: cities.shanghai, name: '上海'})
          this.series[0].data.push({value: cities.shenzhen, name: '深圳'})
          this.series[0].data.push({value: cities.hangzhou, name: '杭州'})
          this.series[0].data.push({value: cities.qita, name: '其他'})
          var myChart = echarts.init(this.$refs.main)
          myChart.setOption({
            legend: {
              data: ['北京', '上海', '深圳', '杭州', '其他']
            },
            title: {
              text: '用户分布表'
            },
            series: this.series
          })
          this.loading = false
        }
      )
    }
}
</script>

<style scoped>
</style>