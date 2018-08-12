<template>
    <div>
        <order-table :tableData="tableData" :tableInfo="tableInfo"></order-table>
    </div>
</template>

<script>
import OrderTable from '@/components/Table'
const table = [
  {
    number: 1,
    name: 'cml',
    address: 'we',
    date: '1234-12-12'
  },
  {
    number: 2,
    name: 'cml',
    address: 'we',
    date: '1234-12-12'
  },
  {
    number: 3,
    name: 'cml',
    address: 'we',
    date: '1234-12-12'
  },
  {
    number: 4,
    name: 'cml',
    address: 'we',
    date: '1234-12-12'
  }
]
export default {
  components: {OrderTable},
  data() {
    const tableInfo = {
      collapse: false,
      columns: [
        {prop: 'number'},
        {prop: 'name'},
        {prop: 'address'},
        {prop: 'date'}
      ],
      maps: {
        number: '序号',
        name: '注册姓名',
        address: '注册地址',
        date: '注册日期'
      }
    }
    const tableData = table
    return {
      tableInfo,
      tableData
    }
  }
}
</script>

<style>
</style>
