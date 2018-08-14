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
        {prop: 'price'},
        {prop: 'state'}
      ],
      maps: {
        id: '订单ID',
        price: '总价格',
        state: '订单状态',
        name: '用户名',
        storeName: '店铺名称',
        storeId: '店铺ID',
        storeAddress: '店铺地址',
        address: '收货地址'
      },
      requests: [
        {type: 'get', funcName: 'getOrderList'}
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
