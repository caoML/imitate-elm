<template>
    <div>
        <el-card class="box-card">
          <title-bar title="订单列表" subTitle="这里记录了一些订单信息"></title-bar>
          <order-table search="id" :tableInfo="tableInfo"></order-table>
        </el-card>
    </div>
    
</template>

<script>
import TitleBar from '@/components/TitleBar'
import OrderTable from '@/components/Table'
export default {
  components: {OrderTable, TitleBar},
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
      requestNum: {
        funcName: 'getOrderNumber',
        params: {'restaurant_id': 1}
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

<style scoped>
.box-card {
  overflow: visible;
}
</style>
