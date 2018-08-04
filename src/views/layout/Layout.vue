<template>
    <div class="app-wrapper">
        <el-aside>
          <sidebar class="left"></sidebar>
        </el-aside>
        <el-container>
          <router-view></router-view>
        </el-container>
    </div>
</template>

<script>
import Sidebar from './components'
import AppMain from './components/AppMain'
export default {
  components: {
    Sidebar,
    AppMain
  }
}
</script>

<style scoped>
</style>
