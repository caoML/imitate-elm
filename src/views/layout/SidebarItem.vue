<template>
      <div class="menu_wrap" :style="{height:high}">
          <template v-for="item in routes" v-if="item.children">
                <el-submenu :index="item.path">
                  <template slot="title">
                    <i :class="'el-icon-'+item.meta.icon"></i>
                    <!-- <svg-icon v-if="item&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon> -->
                    <span class="title" :index="item.path" v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
                  </template>
                  <el-menu-item-group class="menu_main">
                  <template v-for="child in item.children" v-if="child.meta&&item.children">
                      <el-menu-item :index="item.path+'/'+child.path">
                        <span v-if="child.meta&&child.meta.title" class="title">{{child.meta.title}}</span>
                      </el-menu-item>
                  </template>
                  </el-menu-item-group>
                </el-submenu>
          </template>
      </div>
</template>

<script>
const high = document.documentElement.clientHeight + 'px'
export default {
  data() {
    return {
      routes: this.$router.options.routes,
      high
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.menu_wrap {
  background-color: rgb(50, 64, 87);
  color: white;
}
.menu_wrap >>> .menu_main {
  background-color: #1f2d3d;
}
.title {
  color: #bfcbd9;
}
.menu_wrap >>> .el-menu-item-group__title {
  padding: 0px;
}
.el-menu-item.is-active >>> .title {
  color: #20a0ff;
}
.menu_wrap >>> .el-menu-item:hover {
  background-color: #48576a;
}
.menu_wrap >>> .el-submenu__title:hover {
  background-color: #48576a;
}
</style>
