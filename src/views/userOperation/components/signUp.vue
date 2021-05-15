<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    class="login-form"
    autocomplete="on"
    label-position="left">
    <div class="title-container">
      <h3 class="title">注 册</h3>
    </div>

    <el-form-item prop="username">
      <span class="svg-container">
        <i class="el-icon-s-custom"></i>
      </span>
      <el-input
        v-model="form.username"
        placeholder="请输入用户名"
        name="username"
        type="text"
        tabindex="1"
        autocomplete="on"
      />
    </el-form-item>

    <el-form-item prop="firstPassword">
      <span class="svg-container">
        <i class="el-icon-edit"></i>
      </span>
      <el-input
        v-model="form.firstPassword"
        name="firstPassword"
        type="password"
        placeholder="请输入密码"
        tabindex="2"
        autocomplete="on"
      />
    </el-form-item>

    <el-form-item prop="secondPassword">
      <span class="svg-container">
        <i class="el-icon-edit"></i>
      </span>
      <el-input
        v-model="form.secondPassword"
        name="secondPassword"
        type="password"
        placeholder="请再次输入密码"
        tabindex="2"
        autocomplete="on"
      />
    </el-form-item>

    <el-row>
      <el-col :span="18">
        <el-form-item prop="code">
          <el-row type="flex">
            <el-col :span="1">
              <span class="svg-container">
                <!--                <svg-icon icon-class="user"/>-->
              </span>
            </el-col>
            <el-col :span="16">
              <el-input
                name="code"
                v-model="form.code"
                placeholder="请输入验证码"
                type="text"
                tabindex="1"
              />
            </el-col>
          </el-row>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <div class="identify" @click="refreshCode">
          <identify id="signUp" :identify-code="identifyCode"></identify>
        </div>
      </el-col>
    </el-row>

    <el-button
      :loading="loading"
      type="primary"
      style="width:100%;margin-bottom:30px;"
      @click.native.prevent="handleSignUp"
    >注册
    </el-button>

    <el-button
      :loading="loading"
      style="width:100%;margin-bottom:30px;"
      @click.native.prevent="handleSignIn"
    >返回
    </el-button>

  </el-form>
</template>
<script>
import identify from '@/components/identify'
import md5 from 'js-md5'
import { ajax } from '@/utils/tools'

export default {
    components: { identify },
    data () {
        return {
            form: {
                username: '',
                firstPassword: '',
                secondPassword: '',
                code: ''
            },
            rules: {
                username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
                firstPassword: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
                secondPassword: [{ required: true, trigger: 'blur', message: '再次输入密码' }],
                code: [{ required: true, trigger: 'blur', message: '验证码不能为空' }]
            },

            loading: false,
            otherQuery: {},
            identifyCode: '',
            identifyCodes: '0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ'
        }
    },
    mounted () {
        this.refreshCode()
    },
    methods: {
        async handleSignUp () {
            const password = md5(this.form.firstPassword)
            const res = await this.$refs.form.validate()
            const param = {
                username: this.form.username,
                password: password
            }
            if (res) {
                if (this.form.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
                    this.$message.error({
                        showClose: true,
                        message: '验证码错误'
                    })
                } else if (this.form.firstPassword !== this.form.secondPassword) {
                    this.$message.error({
                        showClose: true,
                        message: '两次输入的密码不相同'
                    })
                } else {
                    await ajax.post('/api/user/register', param)
                    this.$message('注册成功')
                }
            }
        },
        handleSignIn () {
            this.$emit('toSignIn')
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

.svg-container {
  padding: 0 0 0 20px;
}

.title-container {
  display: flex;
  justify-content: center;
  color: #eeeeee;
  margin-bottom: 10px;
}
</style>
