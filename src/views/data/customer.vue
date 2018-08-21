<template>
  <div>
    <customer :tableInfo='tableInfo'></customer>
  </div>
</template>

<script>
import Customer from '@/components/Table'
// import http from '@/api'
export default {
  components: {Customer},
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
      ]
    }
    return {
      tableInfo
    }
  }
  // methods: {
  //   async fetchList() {
  //     try {
  //       await http.getCustomerList().then((res) => {
  //         this.tableData = res.data.tableData
  //       })
  //     } catch (error) {
  //       return
  //     }
  //   }
  // },
  // mounted() {
  //   this.fetchList()
  // }
}
</script>

<style>
</style>
