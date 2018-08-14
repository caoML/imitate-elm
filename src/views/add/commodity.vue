<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="14" :offset="4">
                <header>选择食品种类</header>
                <el-form ref="form"
                         :model="form"
                         label-width="110px"
                         :rules="rules"
                         label-position="right">
                    <div class="container">

                        <el-form-item label="食品分类">
                            <el-select v-model="form.selectedFoodOptions" placeholder="请选择">
                                <el-option
                                        v-for="item in form.foodOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <header>添加食品</header>
                    <div class="container">
                        <el-form-item label="食品名称" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="食品活动" >
                            <el-input v-model="form.activity"></el-input>
                        </el-form-item>
                        <el-form-item label="食品详情" >
                            <el-input v-model="form.details"></el-input>
                        </el-form-item>
                        <el-form-item label="上传食品图片">
                            <el-upload
                                    class="avatar-uploader"
                                    :show-file-list="false"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="form.HeadImageUrl" :src="form.HeadImageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="食品特点">
                            <el-select v-model="form.features" multiple placeholder="请选择">
                                <el-option
                                        v-for="item in featureOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="食品规格">
                            <el-radio-group v-model="form.specification"  @change="flag=!flag">
                                <el-radio  label="single" >单规格</el-radio>
                                <el-radio  label="multiple" >多规格</el-radio>
                            </el-radio-group>
                            <div class="single" v-if="flag">
                                <el-form-item label="包装费">
                                    <el-input-number v-model="form.wrapFee"  :min="0" :max="10" label="包装费"></el-input-number>
                                </el-form-item>
                                <el-form-item label="价格">
                                    <el-input-number v-model="form.price"  :min="1" :max="100" label="价格"></el-input-number>
                                </el-form-item>
                            </div>
                            <div class="multiple" v-else>
                                <el-button type="primary" @click="dialogVisible=true">添加规格</el-button>
                                <el-dialog title="添加规格"
                                           :visible.sync="dialogVisible"
                                           width="50%">
                                    <el-form-item label="规格" prop="specification">
                                        <el-input v-model="form.specifications"></el-input>
                                    </el-form-item>
                                    <el-form-item label="包装费">
                                        <el-input-number v-model="form.wrapFee"  :min="0" :max="10" label="包装费"></el-input-number>
                                    </el-form-item>
                                    <el-form-item label="价格">
                                        <el-input-number v-model="form.price"  :min="1" :max="100" label="价格"></el-input-number>
                                    </el-form-item>
                                    <el-button type="primary" @click="addSpcfc">确认</el-button>
                                    <el-button @click="dialogVisible = false">取 消</el-button>
                                </el-dialog>
                                <el-table
                                        :data="form.specificationsData"
                                        :stripe="true"
                                        border
                                        style="width: 100%">
                                    <el-table-column
                                            prop="specification"
                                            label="规格"
                                            width="180">
                                    </el-table-column>
                                    <el-table-column
                                            prop="wrapFee"
                                            label="包装费"
                                            width="180">
                                    </el-table-column>
                                    <el-table-column
                                            prop="price"
                                            label="价格">
                                    </el-table-column>
                                    <el-table-column
                                            fixed="right"
                                            label="操作"
                                            width="120">
                                        <template slot-scope="scope">
                                            <el-button
                                                    type="danger"
                                                    size="mini"
                                                    icon="el-icon-delete"
                                                    @click.native.prevent="deleteRow(scope.$index, form.specificationsData)">
                                                删除
                                            </el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    </div>

                </el-form>
            </el-col>
        </el-row>

    </div>
</template>

<script>
  export default {
    name: 'AddGoods',
    data() {
      return {
        rules: {
          name: [
            {required: true, message: '请输入食品名称', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          specification: [
            {required: true, message: '请输入食品规格', trigger: 'blur'}
          ]
        },
        form: {
          foodOptions: [
            {
              value: '',
              label: 'qqq'
            }, {
              value: '2',
              label: 'www'
            }, {
              value: '3',
              label: 'eee'
            }, {
              value: '4',
              label: 'rrr'
            }, {
              value: '5',
              label: 'ttt'
            }
          ],
          selectedFoodOptions: '',
          name: '',
          details: '',
          activity: '',
          HeadImageUrl: '',
          specification: 'single',
          specifications: '',
          price: '',
          wrapFee: '',
          specificationsData: [{
            specification: '默认',
            wrapFee: '0',
            price: '20'
          }]
        },
        featureOptions: [
          {
            value: 'new',
            label: '新品'
          }, {
            value: 'shopSign',
            label: '招牌'
          }
        ],
        flag: true,
        dialogVisible: false

      }
    },
    methods: {
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      },
      addSpcfc() {
        const spcfcObj = {}
        spcfcObj.specification = this.form.specifications
        spcfcObj.wrapFee = this.form.wrapFee
        spcfcObj.price = this.form.price
        this.form.specificationsData.push(spcfcObj)
        this.dialogVisible = false
        this.form.specifications = ''
      },
      deleteRow(index, rows) {
        rows.splice(index, 1)
      },
      onSubmit() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            console.log('submit!')
          } else {
            console.log('error')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
    header {
        text-align: center;
        height: 40px;
        line-height: 40px;
    }

    .container {
        border-radius: 5px;
        border: 1px solid #eaeefb;
        padding-top: 10px;
        margin-bottom: 20px;
    }
    .avatar-uploader >>> .el-upload {
        border: 1px dashed #b7dfc3;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
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
</style>