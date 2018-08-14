<template>
    <el-container>
          <el-aside width="200px">
            <sidebar class="left"></sidebar>
          </el-aside>
          <el-container>
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
import Sidebar from '@/views/layout'
import MyHeader from '@/components/Header'
export default {
  components: {
    Sidebar,
    MyHeader
  }
}
</script>

<style>
</style>
