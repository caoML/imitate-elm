<template>
    <div>
        <el-menu
          mode="vertical"
          :router="true"
          :show-timeout="200"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          active-text-color="#00d3ee"
        >
          <sidebar-item></sidebar-item>
        </el-menu>
    </div>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  components: {SidebarItem}
}
</script>

<style scoped>
</style>
