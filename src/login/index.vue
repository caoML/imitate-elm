<template>
    <div class="login-container">
        <el-form autoComplete="on" :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-position="left" class="demo-ruleForm">
            <el-form-item prop="user_name">
                <span class="svg-container"><svg-icon iconClass="user"></svg-icon></span>
                <el-input type="" v-model="loginForm.user_name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container"><svg-icon iconClass="password"></svg-icon></span>
                <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" :loading="loading" @click="handleLogin">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import http from '@/api'
export default {
  data() {
    return {
      loginForm: {
        user_name: '',
        password: ''
      },
      loginRules: {
        user_name: [{required: true, trigger: 'blur', message: '请输入用户名'}],
        password: [{required: true, trigger: 'blur', message: '请输入密码'}]
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // this.$store.dispatch('Login', this.loginForm).then(() => {
          //   this.loading = true
          //   this.$router.push({path: '/'})
          // }).catch((e) => {
          //   this.loading = false
          // })
          http.login(this.loginForm).then(response => {
            const data = response.data
            console.log(data.status)
            if (data.status === 1) {
              this.$message.success('登陆成功')
              this.$router.push({path: '/data'})
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
}
.login-container >>> .el-form {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  width: 520px;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}
.login-container >>> .svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  width: 30px;
}
.login-container >>> .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: #454545;
}
.login-container >>> .el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}
.login-container >>> .el-input__inner {
  background-color: transparent;
  border: 0px;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #eee;
  height: 47px;
}
</style>
