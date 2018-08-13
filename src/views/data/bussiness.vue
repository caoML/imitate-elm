<template>
<div>
    <bussiness :tableInfo="tableInfo" ></bussiness>
</div>
</template>

<script>
import Bussiness from '@/components/Table'
export default {
  components: {Bussiness},
  data() {
    const tableInfo = {
      collapse: true,
      columns: [
        {prop: 'name'},
        {prop: 'address'},
        {prop: 'introduce'}
      ],
      maps: {
        id: '店铺ID',
        phone: '联系电话',
        rate: '评分',
        number: '销售量',
        category: '店铺类型',
        name: '店铺名称',
        address: '店铺地址',
        introduce: '店铺介绍'
      },
      requests: [
        {type: 'get', funcName: 'getBussinessList'},
        {type: 'put', funcName: 'updateBussiness'},
        {type: 'post', funcName: 'addFood'},
        {type: 'delete', funcName: 'deleteBussiness'}
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
