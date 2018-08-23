<template>
    <div class="search" >
        <el-input v-model="searchData" prefix-icon="el-icon-search"></el-input>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: ''
    }
  }
}
</script>

<style scoped>
.search {
  max-width: 350px;
  margin-top: 10px;
}
</style>
