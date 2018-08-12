<template>
    <food-table :tableData="tableData" :tableInfo="tableInfo"></food-table>
</template>

<script>
import FoodTable from '@/components/Table'
export default {
  components: {
    FoodTable
  },
  data() {
    const table = [{
      id: '12987122',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      introduce: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987123',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      introduce: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987125',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      introduce: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987126',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      introduce: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }]
    const tableData = table
    const tableInfo = {
      collapse: true,
      columns: [
        {prop: 'name'},
        {prop: 'address'},
        {prop: 'introduce'}
      ],
      maps: {
        id: '店铺ID',
        shop: '餐馆名称',
        shopId: '餐馆ID',
        category: '店铺类型',
        name: '店铺名称',
        address: '店铺地址',
        introduce: '店铺介绍'
      }
    }
    return {
      tableData,
      tableInfo
    }
  }
}
</script>

<style>
</style>
