<template>
<div>
    <el-card class="box-card">
      <title-bar title="商家列表" subTitle="这里记录了一些商家信息"></title-bar>
      <bussiness :tableInfo="tableInfo" search="name"></bussiness>
      <el-dialog title="修改食品信息" :visible.sync="editDialog" v-if="editDialog">
        <edit-bussiness :editInfo="editInfo"></edit-bussiness>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editDialog = false">取 消</el-button>
          <el-button type="primary" @click="updateshop">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
</div>
</template>

<script>
import Bussiness from '@/components/Table'
import EditBussiness from './editBussiness'
import TitleBar from '@/components/TitleBar'
import http from '@/api'
export default {
  components: {Bussiness, EditBussiness, TitleBar},
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
      requestNum: {
        funcName: 'getBussinessNumber'
      },
      operations: [
        {name: '编辑', func: this.updateBussiness},
        {name: '添加商品', func: this.addBussiness}
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
    },
    addBussiness(index, item) {
      this.$router.push(`/add/commodity?restaurant_id=${item.id}`)
    },
    updateshop() {
      http.updateBussiness(this.editInfo).then(res => {
        const data = res.data
        if (data.status === 1) {
          this.$message.success('修改商铺信息成功')
          this.editDialog = false
        }
        if (data.status === 0) {
          this.$message.error('此店铺用做展示，请不要修改')
          this.editDialog = false
        }
      })
    }
  }
}
</script>

<style scoped>
.box-card {
  overflow: visible;
}
</style>
