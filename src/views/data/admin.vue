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
        {prop: 'name'},
        {prop: 'date'},
        {prop: 'address'},
        {prop: 'promise'}
      ],
      maps: {
        name: '姓名',
        date: '注册日期',
        address: '地址',
        promise: '权限'
      },
      requests: [
        {type: 'get', funcName: 'getAdminList'}
      ]
    }
    return {
      tableInfo
    }
  }
}
</script>

<style>
</style>
