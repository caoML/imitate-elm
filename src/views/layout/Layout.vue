<template>
    <div class="app-wrapper">
        <sidebar class="left"></sidebar>
        <div class="main-container">
          <app-main></app-main>
        </div>
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
.app-wrapper {
  display: table;
  position: relative;
  width: 70%;
  background-color: #94fd4e;
}
.left {
  width: 30%;
}
</style>
