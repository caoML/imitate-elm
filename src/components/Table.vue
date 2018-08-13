<template>
  <div>
    <el-table v-loading="loading" element-loading-text="加载中..." v-if="!tableInfo.collapse" :data="tableData" style="width:100%">
        <el-table-column label="序号" type="index" align="center" :index="indexMethod"></el-table-column>
        <el-table-column align="center" v-for="item in tableInfo.columns" :key="item.prop" :label="getLabel(item.prop)" :prop="item.prop">
        </el-table-column>
    </el-table>
    <el-table v-loading="loading" element-loading-text="加载中..." v-else-if="tableInfo.collapse" :data="tableData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item v-for="(item,index) in infoKey" :key="index" :label="getLabel(item)"><span>{{props.row[item]}}</span></el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column align="center" v-for="(item,index) in tableInfo.columns" :key="index" :label="getLabel(item.prop)" :prop="item.prop"></el-table-column>
      <el-table-column align="center" v-if="editMethod()||addMethod()||deleteMethod()" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" v-if="editMethod()">编辑</el-button>
          <el-button size="mini" v-if="addMethod()">添加</el-button>
          <el-button size="mini" v-if="deleteMethod()" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>   
  </div>
</template>

<script>
import http from '@/api'
export default {
  props: {
    tableInfo: Object
  },
  data() {
    return {
      infoKey: [],
      tableData: [],
      loading: true
    }
  },
  // compouted: {
  //   editMethod() {
  //     console.log('!!')
  //     return this.mapName('put')
  //   },
  //   addMethod() {
  //     return this.mapName('post')
  //   },
  //   deleteMethod() {
  //     return this.mapName('delete')
  //   }
  // },
  methods: {
    indexMethod(index) {
      return index + 1
    },
    getLabel(item) {
      return this.tableInfo.maps[item]
    },
    mapEntity(type) {
      return this.tableInfo.requests.find(request =>
        request.type === type
      )
    },
    mapName(type) {
      const method = this.mapEntity(type)
      return method && method.funcName // 使用&&代替if，代码更好看
    },
    getterMethod() {
      return this.mapName('get')
    },
    editMethod() {
      console.log(this.mapName('put'))
      return this.mapName('put')
    },
    addMethod() {
      return this.mapName('post')
    },
    deleteMethod() {
      return this.mapName('delete')
    },
    async handleGet() {
      try {
        // this.mapEntity('get')
        let table
        await http[this.getterMethod()]().then(data => {
          table = data.data.list
        }
        )
        this.tableData = table
        this.infoKey = this.tableInfo.collapse && Object.keys(this.tableData[0])
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.handleGet()
  }
}
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand >>> label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand >>> .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
