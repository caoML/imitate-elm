<template>
<div>
    <bussiness :tableInfo="tableInfo" ></bussiness>
    <el-dialog title="修改食品信息" :visible.sync="editDialog" v-if="editDialog">
      <edit-bussiness :editInfo="editInfo"></edit-bussiness>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取 消</el-button>
        <el-button type="primary" @click="editDialog = false">确 定</el-button>
      </div>
    </el-dialog>
</div>
</template>

<script>
import Bussiness from '@/components/Table'
import EditBussiness from './editBussiness'
export default {
  components: {Bussiness, EditBussiness},
  data() {
    const tableInfo = {
      collapse: true,
      columns: [
        {prop: 'name'},
        {prop: 'address'},
        {prop: 'description'}
      ],
      maps: {
        id: '店铺ID',
        phone: '联系电话',
        rating: '评分',
        recent_order_num: '销售量',
        category: '分类',
        name: '店铺名称',
        address: '店铺地址',
        description: '店铺介绍'
      },
      requests: [
        {type: 'get', funcName: 'getBussinessList', params: {latitude: '45.802158', longitude: '12'}},
        // {type: 'put', funcName: 'updateBussiness'},
        // {type: 'post', funcName: 'addFood'},
        {type: 'delete', funcName: 'deleteBussiness'}
      ],
      operations: [
        {name: '编辑', func: this.updateBussiness}
      ]
    }
    return {
      tableInfo,
      editDialog: false
    }
  },
  methods: {
    updateBussiness(index, item) {
      this.editDialog = true
      this.editInfo = item
    }
  }
}
</script>

<style>
</style>
