<template>
    <div class="app-wrapper">
        <el-container>
          <el-aside>
          <sidebar class="left"></sidebar>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
import Sidebar from './components'
// import AppMain from './components/AppMain'
export default {
  components: {
    Sidebar
    // AppMain
  }
}
</script>

<style scoped>
</style>
