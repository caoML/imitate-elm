<template>
    <div class="edit-food">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="食品名称"><el-input v-model="form.foodName"></el-input></el-form-item>
            <el-form-item label="食品介绍"><el-input v-model="form.desc"></el-input></el-form-item>
            <el-form-item label="食品分类">
                <el-select v-model="form.category" placeholder="请选择食品分类">
                </el-select>
            </el-form-item>
            <el-form-item label="食品图片">
                <el-upload
                    class="avatar-uploader"
                    action=''
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  props: {
    editInfo: Object
  },
  data() {
    return {
      imageUrl: '',
      form: this.editInfo
    }
  },
  methods: {
    beforeAvatarUpload() {

    },
    handleAvatarSuccess() {

    }
  }
}
</script>

<style scoped>
.edit-food >>> .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.edit-food >>> .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-form-item >>> .el-form-item__content {
  text-align: left;
}
</style>
