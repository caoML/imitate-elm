<template>
  <div>
    <h1>数据统计</h1>
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="grid-content today_head data-title">当日数据:</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{newin['user']}}</span>
          <span>新增用户</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{newin['order']}}</span>
          <span>新增订单</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{newin['admin']}}</span>
          <span>新增管理员</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="grid-content all_head data-title">总数据:</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{allData[0]}}</span>
          <span>注册用户</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{allData[1]}}</span>
          <span>订单</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{allData[2]}}</span>
          <span>管理员</span>
        </div>
      </el-col>
    </el-row>
    <div ref="main" style="height: 700px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    data() {
      return {
        requestlist: [
          'user',
          'order',
          'admin'
        ],
        newin: {user: '', order: '', admin: ''},
        allData: ['', '', ''],
        user: '',
        admin: '',
        order: '',
        all: [
          'v1/users',
          'bos/orders',
          'admin'
        ]
      }
    },
    mounted: function () {
      const today = this.formatDate(new Date().getTime())
      this.requestlist.forEach((item) => {
        this.$http.get(`https://elm.cangdu.org/statis/${item}/${today}/count`).then(
          result => {
            this.newin[item] = result.body.count
          }
        )
      })
      var i = 0
      var _this = this
      this.all.forEach((item) => {
        (function (i) {
          _this.$http.get(`https://elm.cangdu.org/${item}/count`).then(
            result => {
              _this.allData[i] = result.body.count
            }
          )
        })(i)
        i++
      })

      this.initCharts()
    },
    methods: {
      formatDate(time) {
        var date = new Date(time)

        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        var newTime = year + '-' +
          (month < 10 ? '0' + month : month) + '-' +
          (day < 10 ? '0' + day : day)
        return newTime
      },
      initCharts() {
        const option = {
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
        var myChart = echarts.init(this.$refs.main)
        myChart.setOption(option)
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .data-title {
    font-size: 20px;
    color: #fff;
    text-align: center;
    font-weight: 400;
    line-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .today_head {
    background: #ff9800;
  }

  .all_head {
    background: #20a0ff;
  }
</style>
