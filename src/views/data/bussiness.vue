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
