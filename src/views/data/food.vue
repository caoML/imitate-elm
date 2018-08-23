<template>
    <div class="food">
      <el-card class="box-card">
        <title-bar title="食品列表" subTitle="这里记录了一些食品信息"></title-bar>
        <food-table search="name" :tableInfo="tableInfo"></food-table>
        <el-dialog title="修改食品信息" :visible.sync="editDialog" v-if="editDialog">
          <edit-food :editInfo="editInfo"></edit-food>
          <div slot="footer" class="dialog-footer">
            <el-button @click="editDialog = false">取 消</el-button>
            <el-button type="primary" @click="subupdatefood">确 定</el-button>
          </div>
        </el-dialog>
      </el-card>
    </div>
</template>

<script>
import FoodTable from '@/components/Table'
import EditFood from './editFood'
import TitleBar from '@/components/TitleBar'
import http from '@/api'
export default {
  components: {
    FoodTable,
    EditFood,
    TitleBar
  },
  data() {
    const tableInfo = {
      collapse: true,
      columns: [
        {prop: 'name'},
        {prop: 'description'},
        {prop: 'rating'}
      ],
      maps: {
        name: '食品名称',
        item_id: '食品ID',
        pinyin_name: '餐馆名称',
        restaurant_id: '餐馆ID',
        description: '食品介绍',
        rating: '食品评分',
        month_sales: '月销量'
      },
      requests: [
        {type: 'get', funcName: 'getFoodList', params: {'restaurant_id': 1}},
        // {type: 'put', funcName: 'updateFood'},
        {type: 'delete', funcName: 'deleteFood'}
        // {type: 'post', funcName: 'addFood'}
      ],
      requestNum: {
        funcName: 'getFoodNumber',
        params: {'restaurant_id': 1}
      },
      operations: [
        {name: '编辑', func: this.updateFood}
      ]
    }
    return {
      tableInfo,
      editDialog: false,
      editInfo: {}
    }
  },
  methods: {
    updateFood(index, item) {
      this.editDialog = true
      this.editInfo = item
    },
    subupdatefood() {
      http.updateFood(this.editInfo).then(res => {
        const data = res.data
        if (data.status === 1) {
          this.$message.success('修改食品信息成功')
          this.editDialog = false
        } else {
          this.$message.error(`${data.message}`)
          this.editDialog = false
        }
      })
    }
  }
}
</script>

<style scoped>
.food >>> .dialog-footer {
  text-align: center;
}
.box-card {
  overflow: visible;
}
</style>
