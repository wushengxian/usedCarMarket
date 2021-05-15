<template>
  <div>
    <div class="title">
      <h2>用户信息</h2>
    </div>
    <div class="comment__info">
      <div class="user__info__img">
        <div class="user__img__info">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-689a5457bccaad26103eb34dc87ed0c6_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620747631&t=d2911d2ff95bd18b26c91b335e46344f"
            alt="">
        </div>
      </div>
      <div class="user__info__form">
        <el-form style="width: 400px" label-position="top">
          <el-form-item label="手机号:">
            <el-input v-model="form.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="所在地:">
            <el-input v-model="form.local"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="handleSave">保存</el-button>
            <el-button type="info" @click="viewModify">修改密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog :visible="isModify"></el-dialog>
  </div>

</template>

<script>
export default {
    name: 'UserInfo',
    props: {
        form: {
            type: Object,
            require: true,
            default: () => {
                return {}
            }
        }

    },
    data () {
        return {
            userForm: {
                phoneNumber: '15980074892',
                email: ''
            },
            cancelForm: {},
            isModify: false

        }
    },
    methods: {
        handleSave () {
        },
        viewModify () {
            this.modify = true
        }
    }
}
</script>

<style scoped lang="scss">
.title {
  border-bottom: 1px solid #efefef;
  padding: 0 20px 20px 20px;
}

.comment__info {
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .user__info__img {
    .user__img__info {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      //background: greenyellow;

      img {
        width: 100%;
        height: 100%;
      }
    }

  }

  .user__info__form {
    padding-top: 20px;
  }
}
</style>
