<template>
    <div>
        <el-card class="box-card">
          <title-bar title="订单列表" subTitle="这里记录了一些订单信息"></title-bar>
          <admin-table search="user_name" :tableInfo="tableInfo"></admin-table>
        </el-card>
    </div>
</template>

<script>
import AdminTable from '@/components/Table'
import TitleBar from '@/components/TitleBar'
export default {
  components: {AdminTable, TitleBar},
  data() {
    const tableInfo = {
      collapse: false,
      columns: [
        {prop: 'user_name'},
        {prop: 'create_time'},
        {prop: 'city'},
        {prop: 'admin'}
      ],
      maps: {
        user_name: '姓名',
        create_time: '注册日期',
        city: '地址',
        admin: '权限'
      },
      requests: [
        {type: 'get', funcName: 'getAdminList', params: {offset: 0, limit: 20}}
      ],
      requestNum: {
        funcName: 'getAdminNumber'
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
