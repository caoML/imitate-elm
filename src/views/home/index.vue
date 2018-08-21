<template>
    <el-container class="main">
          <el-aside width="200px">
            <sidebar class="left"></sidebar>
          </el-aside>
          <el-container :style="{height:high}">
            <el-header>
              <my-header></my-header>
            </el-header>
            <el-main>
              <keep-alive>
                <router-view></router-view>  
              </keep-alive>  
            </el-main>
          </el-container>
      </el-container>
</template>

<script>
const high = document.documentElement.clientHeight + 'px'
import Sidebar from '@/views/layout'
import MyHeader from '@/components/Header'
export default {
  components: {
    Sidebar,
    MyHeader
  },
  data() {
    return {
      high
    }
  }
}
</script>

<style scoped>
</style>
