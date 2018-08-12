<template>
    <div>
        <el-breadcrumb class="headNav" separator="/">
            <el-breadcrumb-item :to="{path:'/manage'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.headNav {
  padding: 20px;
}
</style>
