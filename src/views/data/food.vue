<template>
    <div class="food">
      <food-table :tableInfo="tableInfo"></food-table>
      <el-dialog title="修改食品信息" :visible.sync="editDialog" v-if="editDialog">
        <edit-food :editInfo="editInfo"></edit-food>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editDialog = false">取 消</el-button>
          <el-button type="primary" @click="editDialog = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import FoodTable from '@/components/Table'
import EditFood from './editFood'
export default {
  components: {
    FoodTable,
    EditFood
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
    }
  }
}
</script>

<style scoped>
.food >>> .dialog-footer {
  text-align: center;
}
</style>
