<template>
    <div class="menu-wrap">
        <template v-for="item in routes" v-if="item.children">
            <el-submenu :index="item.path" :key="item.name">
              <template slot="title">
                <!-- <svg-icon v-if="item&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon> -->
                <span v-if="item&&item.meta.title" slot="title">{{item.meta.title}}</span>
              </template>
              <template v-for="child in item.children" v-if="item.children">
                <!-- <router-link :to="item.path+'/'+child.path" :key="child.name"> -->
                  <el-menu-item :index="item.path+'/'+child.path">
                    <!-- <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon> -->
                    <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
                  </el-menu-item>
                <!-- </router-link> -->
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
