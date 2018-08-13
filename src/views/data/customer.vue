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
        {prop: 'name'},
        {prop: 'address'},
        {prop: 'date'}
      ],
      maps: {
        name: '店铺名称',
        address: '店铺地址',
        date: '店铺成立日期'
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
