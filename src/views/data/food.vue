<template>
    <food-table :tableInfo="tableInfo"></food-table>
</template>

<script>
import FoodTable from '@/components/Table'
export default {
  components: {
    FoodTable
  },
  data() {
    const tableInfo = {
      collapse: true,
      columns: [
        {prop: 'foodName'},
        {prop: 'desc'},
        {prop: 'rate'}
      ],
      maps: {
        foodName: '食品名称',
        foodId: '食品ID',
        shopName: '餐馆名称',
        shopId: '餐馆ID',
        category: '食品类型',
        address: '餐馆地址',
        desc: '食品介绍',
        rate: '食品评分',
        number: '月销量'
      },
      requests: [
        {type: 'get', funcName: 'getFoodList'},
        {type: 'put', funcName: 'updateFood'},
        {type: 'delete', funcName: 'deleteFood'},
        {type: 'post', funcName: 'addFood'}
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
