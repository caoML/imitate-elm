<template>
  <div v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
    <h1 @click="handleClick">数据统计</h1>
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="grid-content TODAY_head data-title">当日数据:</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span >{{user[6]}}</span>
          <span>新增用户</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{order[6]}}</span>
          <span>新增订单</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{admin[6]}}</span>
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
          <span>{{users}}</span>
          <span>注册用户</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{orders}}</span>
          <span>订单</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{admins}}</span>
          <span>管理员</span>
        </div>
      </el-col>
    </el-row>
    <div ref="main" style="height: 400px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import axios from 'axios'
  import http from '@/api'

  export default {
    data() {
      return {
        user: [],
        admin: [],
        order: [],
        users: 0,
        admins: 0,
        orders: 0,
        loading: true
      }
    },
    mounted() {
      this.show()
    },
    methods: {
      async show() {
        for (let i = 0; i < 7; i++) {
          await axios.all([http.getNewAdminNumber(this.getOtherDate(i)), http.getNewOrderNumber(this.getOtherDate(i)), http.getNewCustomerNumber(this.getOtherDate(i))]).then(
            axios.spread((admin, order, customer) => {
              this.$set(this.admin, 6 - i, admin.data.count)
              this.$set(this.order, 6 - i, order.data.count)
              this.$set(this.user, 6 - i, customer.data.count)
            })
          )
        }
        await axios.all([http.getAdminNumber(), http.getOrderNumber(), http.getCustomerNumber()]).then(
          axios.spread((admin, order, customer) => {
            this.orders = order.data.count
            this.admins = admin.data.count
            this.users = customer.data.count
          })
        )
        await this.initCharts()
      },
      getOtherDate(num) {
        return this.formatDate(new Date().getTime() - 24 * 60 * 60 * 1000 * num)
      },
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
            data: ['新增用户', '新增订单', '新增管理员']
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
            data: [
              this.formatDate(this.getOtherDate(6)),
              this.formatDate(this.getOtherDate(5)),
              this.formatDate(this.getOtherDate(4)),
              this.formatDate(this.getOtherDate(3)),
              this.formatDate(this.getOtherDate(2)),
              this.formatDate(this.getOtherDate(1)),
              this.formatDate(this.getOtherDate(0))
            ]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '新增用户',
              type: 'line',
              stack: '总量',
              data: this.user
            },
            {
              name: '新增订单',
              type: 'line',
              stack: '总量',
              data: this.order
            },
            {
              name: '新增管理员',
              type: 'line',
              stack: '总量',
              data: this.admin
            }
          ]
        }
        var myChart = echarts.init(this.$refs.main)
        myChart.setOption(option)
        this.loading = false
      },
      handleClick() {
        console.log(this.admin)
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

  .TODAY_head {
    background: #ff9800;
  }

  .all_head {
    background: #20a0ff;
  }
</style>
