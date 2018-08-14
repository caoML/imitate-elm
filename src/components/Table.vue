<template>
  <div class="all">
    <el-table v-loading="loading" element-loading-text="加载中..." v-if="!collapse" :data="tableData" style="width:100%">
        <el-table-column label="序号" type="index" align="center" :index="indexMethod"></el-table-column>
        <el-table-column align="center" v-for="item in columns" :key="item.prop" :label="getLabel(item.prop)" :prop="item.prop">
        </el-table-column>
    </el-table>
    <el-table v-loading="loading" style="width:100%" element-loading-text="加载中..." v-else-if="collapse" :data="tableData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item v-for="(item,index) in infoKey" :key="index" :label="getLabel(item)"><span>{{props.row[item]}}</span></el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column align="center" v-for="(item,index) in columns" :key="index" :label="getLabel(item.prop)" :prop="item.prop"></el-table-column>
      <el-table-column align="center" v-if="hasOpColumn()" label="操作">
        <template slot-scope="scope">
          <div v-if="operations && operations.length>0" class="ops">
            <el-button v-for="op in operations" :key="op.name" size="mini" @click="op.func(scope.$index,scope.row)">{{op.name}}</el-button>  
          </div>
          <el-button size="mini" v-if="editMethod()">编辑</el-button>
          <el-button size="mini" v-if="addMethod()">添加</el-button>
          <el-button size="mini" v-if="deleteMethod()" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
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
      ...this.tableInfo,
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
      return this.maps[item]
    },
    mapEntity(type) {
      return this.requests.find(request =>
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
        this.infoKey = this.collapse && Object.keys(this.tableData[0])
      } finally {
        this.loading = false
      }
    },
    async handleDelete(index, item) {
      try {
        await this.$confirm('将永久删除该条目,是否继续', '提示', {
          type: 'warning',
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        })
        await http[this.deleteMethod()]()
        this.tableData = this.tableData.filter((_, i) => i !== index)
        this.$message.success('删除成功')
      } catch (error) {
        return
      }
    },
    hasOpColumn() {
      return (this.operations && this.operations.length > 0) || this.addMethod() || this.deleteMethod() || this.editMethod()
    }
  },
  mounted() {
    this.handleGet()
  }
}
</script>

<style scoped>
.all >>> .el-table__expanded-cell {
  box-shadow: inset 0 2px 0 #f4f4f4;
}
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
  text-align: left;
}
.el-form-item__label {
  text-align: left;
}
.ops {
  display: inline-block;
}
</style>
