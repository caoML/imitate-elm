<template>
  <div>
    <el-card class="box-card">
      <title-bar title="用户列表" subTitle="这里记录了一些用户信息"></title-bar>
      <customer search="username" :tableInfo='tableInfo'></customer>
    </el-card>
  </div>
</template>

<script>
import Customer from '@/components/Table'
import TitleBar from '@/components/TitleBar'
// import http from '@/api'
export default {
  components: {Customer, TitleBar},
  data() {
    const tableInfo = {
      collapse: false,
      columns: [
        {prop: 'username'},
        {prop: 'city'},
        {prop: 'registe_time'}
      ],
      maps: {
        username: '用户姓名',
        city: '注册地址',
        registe_time: '注册日期'
      },
      requests: [
        {type: 'get', funcName: 'getCustomerList'}
      ],
      requestNum: {
        funcName: 'getCustomerNumber'
      }
    }
    return {
      tableInfo
    }
  }
}
</script>

<style scoped>
.box-card {
  overflow: visible;
}
</style>
