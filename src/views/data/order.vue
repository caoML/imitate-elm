<template>
    <div>
        <order-table :tableInfo="tableInfo"></order-table>
    </div>
</template>

<script>
import OrderTable from '@/components/Table'
export default {
  components: {OrderTable},
  data() {
    const tableInfo = {
      collapse: true,
      columns: [
        {prop: 'id'},
        {prop: 'total_amount'}
        // {prop: 'status_bar.title'}
      ],
      maps: {
        id: '订单ID',
        total_amount: '总价格',
        // state: '订单状态',
        // name: '用户名',
        restaurant_name: '店铺名称',
        restaurant_id: '店铺ID'
        // storeAddress: '店铺地址',
        // address: '收货地址'
      },
      requests: [
        {type: 'get', funcName: 'getOrderList', params: {offset: 0, limit: 20}}
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
