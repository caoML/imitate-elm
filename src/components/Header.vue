<template>
    <div class="head">
        <el-breadcrumb class="headNav right-menu-item" separator="/">
            <el-breadcrumb-item :to="{path:'/manage'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in $route.meta.bread" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown class="avatar-container right-menu-item" trigger="click">
            <div class="avatar-wrapper">
                <img class="avator-img" src="http://elm.cangdu.org/img/default.jpg">
            </div>
            <el-dropdown-menu class="avatar-content" slot="dropdown">
                <el-dropdown-item>
                    <span @click="jumpMain">首页</span>
                </el-dropdown-item>
                <el-dropdown-item>
                    <span @click="logout">登出</span>
                </el-dropdown-item>
            </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
import http from '@/api'
export default {
  methods: {
    logout() {
      http.logout().then(res => {
        const data = res.data
        console.log(data)
        if (data.status === 1) {
          this.$message.success('退出成功')
          this.$router.push({path: '/login'})
        }
      }).catch(err => {
        console.log(err)
      })
    },
    jumpMain() {
      this.$router.push({path: '/data'})
    }
  }
}
</script>

<style scoped>
.headNav {
  padding: 20px;
}
.avator-img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
}
.avatar-container {
  float: right;
}
.avatar-wrapper {
  cursor: pointer;
  margin-top: 5px;
  margin-right: 40px;
  position: relative;
}
.right-menu-item {
  display: inline-block;
  margin: 0 8px;
}
.el-icon-caret-bottom {
  position: absolute;
  right: -20px;
  top: 25px;
  font-size: 12px;
}
.avatar-content {
  margin-right: 10px;
}
</style>
