<template>
  <el-form
    ref="loginForm"
    :model="form"
    :rules="rules"
    class="login-form"
    autocomplete="on"
    label-position="left"
  >
    <div class="title-container">
      <h3 class="title" @click="handleSignIn">登 录</h3>
    </div>

    <el-form-item>
      <span class="svg-container">
        <i class="el-icon-s-custom"></i>
      </span>
      <el-input
        v-model="form.username"
        placeholder="用户名"
        type="text"
        tabindex="1"
        autocomplete="on"
      />
    </el-form-item>

    <el-form-item>
      <span class="svg-container">
        <i class="el-icon-edit"></i>
      </span>
      <el-input
        v-model="form.password"
        show-password
        type="password"
        placeholder="请输入密码"
        tabindex="2"
        autocomplete="on"
        @keyup.enter.native="handleSignIn"
      />
    </el-form-item>

    <el-row>
      <el-col :span="18">
        <el-form-item>
          <el-row type="flex">
            <el-col :span="1">
              <span class="svg-container">
                <!--                <svg-icon icon-class="user"/>-->
              </span>
            </el-col>
            <el-col :span="16">
              <el-input
                v-model="form.code"
                placeholder="请输入验证码"
                name="code"
                type="text"
                tabindex="1"
                autocomplete="on"
              />
            </el-col>
          </el-row>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <div class="identify" @click="refreshCode">
          <identify id="signIn" :identify-code="identifyCode"></identify>
        </div>
      </el-col>
    </el-row>

    <el-button
      :loading="loading"
      type="primary"
      style="width:100%;margin-bottom:30px;"
      @click.native.prevent="handleSignIn"
    >登录
    </el-button>
    <el-button
      :loading="loading"
      style="width:100%;margin-bottom:30px;"
      @click.native.prevent="handleSignUp"
    >注册
    </el-button>
  </el-form>
</template>
<script>
import identify from '@/components/identify'
import { ajax } from '@/utils/tools'
import md5 from 'js-md5'

export default {
    components: { identify },

    data () {
        return {
            form: { username: 'admin', password: '123456', code: '' },
            rules: {
                username: [{ required: true, trigger: 'blur' }],
                password: [{ required: true, trigger: 'blur' }],
                code: [{ require: true, trigger: 'blur' }]
            },
            loading: false,
            identifyCode: '',
            identifyCodes: '0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ'
        }
    },
    mounted () {
        this.refreshCode()
    },
    methods: {
        async handleSignIn () {
            if (this.form.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
                this.$message.error({
                    showClose: true,
                    message: '验证码错误'
                })
            } else {
                const password = md5(this.form.password)
                const param = {
                    username: this.form.username,
                    password: password
                }
                const res = await ajax.post('/api/user/login', param)
                if (res.length > 0) {
                    this.$router.replace({ path: '/home/index' })
                } else {
                    this.$message.error('登录失败')
                }
            }
        },
        handleSignUp () {
            this.$emit('toSignUp')
        },
        refreshCode () {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
        },
        randomNum (min, max) {
            max = max + 1
            return Math.floor(Math.random() * (max - min) + min)
        },
        // 随机生成验证码字符串
        makeCode (data, len) {
            for (let i = 0; i < len; i++) {
                this.identifyCode += data[this.randomNum(0, data.length - 1)]
            }
        }
    }
}
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.title-container {
  display: flex;
  justify-content: center;
  color: #eeeeee;
  margin-bottom: 10px;
}

.svg-container {
  padding: 0 0 0 20px;
}
</style>
