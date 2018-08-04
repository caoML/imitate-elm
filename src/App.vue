<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        :router="true"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>adddata</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/adddata/addshop"  >添加店铺</el-menu-item>
                            <el-menu-item index="/adddata/addgoods"  >添加商品</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>图表</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/chart/userDistribution"  >用户分布</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
      name: 'App',
      data() {
        return {}
      },
      components: {}
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 260px;
    }

    .el-main {
        color: #333;
        line-height: 160px;
    }

    .el-container {
        margin-bottom: 40px;
    }
</style>