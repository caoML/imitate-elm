<template>
    <div>
        <admin-table :tableInfo="tableInfo" :tableData="tableData"></admin-table>
    </div>
</template>

<script>
import AdminTable from '@/components/Table'
import http from '@/api'
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
      }
    }
    return {
      tableInfo,
      tableData: []
    }
  },
  methods: {
    async fetchList() {
      try {
        http.getAdminList().then((res) => {
          this.tableData = res.data.adminList
        })
      } catch (error) {
        return
      }
    }
  },
  mounted() {
    this.fetchList()
  }
}
</script>

<style>
</style>
