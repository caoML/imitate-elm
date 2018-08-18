<template>
  <div id="app">
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
  </div>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
body {
  padding: 0px;
  margin: 0px;
}
</style>
