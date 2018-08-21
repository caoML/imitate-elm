<template>
  <el-row :gutter="20">
    <el-col :span="14" :offset="4">
      <el-form ref="form" :model="form" label-width="110px" :rules="rules" label-position="right">
        <el-form-item label="店铺名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-autocomplete
              class="inline-input"
              v-model="form.address"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              :trigger-on-focus="false"
          ></el-autocomplete>
          <br>
          当前地址: {{form.guessLocation}}
        </el-form-item>
        <el-form-item label="店铺简介">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="店铺标语">
          <el-input v-model="form.promotion_info"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类">
          <el-cascader
              :options="form.foodOptions"
              v-model="form.category"
          >
          </el-cascader>
        </el-form-item>
        <el-form-item label="店铺特点">
          <span>品牌保证</span>
          <el-switch v-model="form.is_premium"></el-switch>
          <span>蜂鸟专送</span>
          <el-switch v-model="form.delivery_mode"></el-switch>
          <span>新开店铺</span>
          <el-switch v-model="form.new"></el-switch>
          <br>
          <span>外卖保</span>
          <el-switch v-model="form.bao"></el-switch>
          <span>准时达</span>
          <el-switch v-model="form.zhun"></el-switch>
          <span>开发票</span>
          <el-switch v-model="form.piao"></el-switch>

        </el-form-item>
        <el-form-item label="配送费">
          <el-input-number
              v-model="form.float_delivery_fee"
              @change="handleChange"
              :min="1"
              :max="10"
          >

          </el-input-number>
        </el-form-item>

        <el-form-item label="起送价">
          <el-input-number
              v-model="form.float_minimum_order_amount"

              :min="5"
              :max="100"
          >

          </el-input-number>
        </el-form-item>
        <el-form-item label="营业时间">
          <el-time-select
              v-model="form.startTime"
              :picker-options="{
                    start: '05:30',
                    step: '00:15',
                    end: '23:30'
                    }"
              placeholder="选择营业时间">
          </el-time-select>
          <el-time-select
              v-model="form.endtime"
              :picker-options="{
                    start: '05:30',
                    step: '00:15',
                    end: '23:30'
                    }"
              placeholder="选择打烊时间">
          </el-time-select>
        </el-form-item>
        <el-form-item label="上传店铺头像">
          <el-upload
              class="avatar-uploader"
              :show-file-list="false"
              action="https://elm.cangdu.org/v1/addimg/:shop"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
            <img v-if="form.image_path" :src="form.image_path" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="优惠活动">

          <el-select v-model="form.favourable" placeholder="请选择" @change="getClass">
            <el-option
                v-for="item in form.favourableOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
          </el-select>
          <el-dialog
              title="添加活动"
              :visible.sync="dialogVisible"
              width="30%"
          >
            <el-input placeholder="详情" v-model="addd"></el-input>
            <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="addActivity">确 定</el-button>
                    </span>
          </el-dialog>
          <el-table
              :data="form.activities"
              :stripe="true"
              border
              style="width: 100%">
            <el-table-column
                prop="icon_name"
                label="活动标题"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="活动名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="description"
                label="活动详情">
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
                    @click.native.prevent="deleteRow(scope.$index, form.activities)">
                  delete
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <!--<el-button>取消</el-button>-->
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          latitude: '',
          longitude: '',
          activities: [
            {
              icon_name: '减',
              name: '满减优惠',
              description: '满30减5，满60减8'
            }
          ],
          float_minimum_order_amount: '',
          image_path: '',
          name: '',
          phone: '',
          address: '',
          startTime: '',
          endTime: '',
          description: '',
          promotion_info: '',
          is_premium: true, // dianputedian
          new: true,
          delivery_mode: true,
          bao: true,
          zhun: true,
          piao: true,
          float_delivery_fee: 3, // peisongfei
          foodOptions: [
            {
              value: 'kuaican',
              label: '快餐便当',
              children: [
                {value: 'jiancan', label: '简餐'},
                {value: 'gaijiaofan', label: '盖浇饭'},
                {value: 'mifenmianguan', label: '米粉面馆'},
                {value: 'baozizhoudian', label: '包子粥店'},
                {value: 'xiangguoshaguo', label: '香锅砂锅'},
                {value: 'malatang', label: '麻辣烫'}
              ]
            },
            {
              value: 'guoshushengxian',
              label: '果蔬生鲜',
              children: [
                {
                  value: '',
                  label: ''
                }
              ]
            }
          ],
          category: [],
          favourable: '',
          favourableOptions: [
            {
              value: 'a',
              label: '满减优惠'
            },
            {
              value: 'b',
              label: '优惠大酬宾'
            },
            {
              value: 'c',
              label: '新用户立减'
            },
            {
              value: 'd',
              label: '进店领券'
            }
          ],
          userInfo: {
            user_name: 'wdf',
            password: '123'
          }

        },
        rules: {
          name: [
            {required: true, message: '请输入店铺名称', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入联系电话', trigger: 'blur'},
            {
              validator(rule, value, callback) {
                var errors = []
                if (!/((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(value)) {
                  errors.push(
                    new Error('请输入正确的电话号码'))
                }
                callback(errors)
              }
            }
          ],
          address: [
            {required: true, message: '请输入详细地址', trigger: 'blur'}
          ]
        },
        dialogVisible: false,
        ad: '',
        addd: '',
        guessLocation: '',
        restaurants: []
      }
    },
    methods: {
      onSubmit() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            console.log('submit!')
          } else {
            console.log('error')
            const h = this.$createElement
            this.$notify.error({
              title: '错误!',
              message: h('i', { style: 'color: red'}, '请检查是否有错误!'),
              offset: 100
            })
            return false
          }
        })
        this.$http.jsonp(`http://api.map.baidu.com/geocoder/v2/?address=${this.form.address}&output=json&ak=zVhc39lBEh6Iz6RbOk3fRbVdPo4hxWGw`).then(
          response => {
            this.form.latitude = JSON.parse(response.bodyText).result.location.lat
            this.form.longitude = JSON.parse(response.bodyText).result.location.lng
          }
        )
        this.$http.post('https://elm.cangdu.org/shopping/addshop', this.form).then((response) => {
          console.log(response)
        })
      },
      handleChange(value) {
        console.log(value)
      },
      handleAvatarSuccess(res, file) {
        this.form.image_path = URL.createObjectURL(file.raw)
        console.log(this.form.image_path)
      },
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
      addActivity() {
        const activityObj = {}
        switch (this.ad) {
          case 'a':
            activityObj.icon_name = '减'
            activityObj.name = '满减优惠'
            break
          case 'b':
            activityObj.icon_name = '特'
            activityObj.name = '优惠大酬宾'
            break
          case 'c':
            activityObj.icon_name = '新'
            activityObj.name = '新用户立减'
            break
          case 'd':
            activityObj.icon_name = '领'
            activityObj.name = '进店领券'

            break
          default :
            activityObj.icon_name = '领'
            activityObj.name = '进店领券'
            break
        }
        activityObj.description = this.addd
        this.form.activities.push(activityObj)
        this.dialogVisible = false
        this.addd = ''
      },
      getClass(value) {
        this.ad = value
        this.dialogVisible = true
      },
      deleteRow(index, rows) {
        rows.splice(index, 1)
      },
      querySearch(queryString, cb) {
        let restaurants = [{}]
        this.$http.jsonp(`http://api.map.baidu.com/place/v2/suggestion?query=${this.form.address}&region=${this.form.guessLocation}&city_limit=true&output=json&ak=zVhc39lBEh6Iz6RbOk3fRbVdPo4hxWGw`, {credentials: true})
          .then((results) => {
            for (const item of results.body.result) {
              item.value = item.name
            }
            restaurants = results.body.result
            cb(restaurants)
          })
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString) !== -1)
        }
      }
    },
    beforeMount: function () {
      this.$http.jsonp('https://restapi.amap.com/v3/ip?output=JSON&key=069dd664e64f4661aebb2b8082e99254').then(
        result => {
          this.form.guessLocation = result.body.city
        }
      )
    }
  }
</script>

<style scoped>
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
