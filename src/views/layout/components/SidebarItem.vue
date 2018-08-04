<template>
    <div class="menu-wrap">
        <div @click="clicks">click</div>
        <template v-for="item in routes" v-if="item.children">
            
            <!-- <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
            <el-submenu :index="item.path" :key="item.name">
              <template slot="title">
                <!-- <svg-icon v-if="item&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon> -->
                <span v-if="item&&item.meta.title" slot="title">{{item.meta.title}}</span>
              </template>
              <template v-for="child in item.children" v-if="item.children">
                <router-link :to="item.path+'/'+child.path" :key="child.name">
                  <el-menu-item :index="item.path+'/'+child.path">
                    <!-- <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon> -->
                    <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
                  </el-menu-item>
                </router-link>
              </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
// import router from '@/router'
export default {
  data() {
    return {
      routes: this.$router.options.routes
    }
  },
  methods: {
    clicks() {
      console.log(this.$router.options.routes)
    }
  }

}
</script>

<style>
</style>
