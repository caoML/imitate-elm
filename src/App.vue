<template>
  <div id="app" :style="{height:high}">
    <router-view></router-view>
  </div>
</template>

<script>
// import Sidebar from '@/views/layout'
// import MyHeader from '@/components/Header'
const high = document.documentElement.clientHeight + 'px'
export default {
  data() {
    return {
      high
    }
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: auto;
}
body {
  padding: 0px;
  margin: 0px;
}
</style>
