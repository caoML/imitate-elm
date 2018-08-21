<template>
  <div>
    <h1>数据统计</h1>
    <button @click="clickme">click</button>
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
          <span>{{newi['test']}}</span>
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
          <span>{{}}</span>
          <span>注册用户</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{}}</span>
          <span>订单</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>{{}}</span>
          <span>管理员</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        requestlist: [
          'user',
          'order',
          'admin'
        ],
        newin: [],
        customer: '',
        order: '',
        admin: '',
        test: '123',
        newi: {
          test: ''
        }
      }
    },
    mounted: function () {
      const today = this.formatDate(new Date().getTime())
      this.requestlist.forEach((item) => {
        this.$http.get(`https://elm.cangdu.org/statis/${item}/${today}/count`).then(
          result => {
            this.change()
            this.newin[item] = result.body.count
          }
        )
      })
    },
    methods: {
      change() {
        this.newi['test'] = '435345'
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
      clickme() {
        console.log(this.newin)
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
