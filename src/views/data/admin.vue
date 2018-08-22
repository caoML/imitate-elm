<template>
    <div>
        <admin-table :tableInfo="tableInfo"></admin-table>
    </div>
</template>

<script>
import AdminTable from '@/components/Table'
export default {
  components: {AdminTable},
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

<style>
</style>
