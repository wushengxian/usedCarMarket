<template>
  <div style="height: 100%">
    <div class="usercenter__inner">
      <div class="usercenter__info">
        <div style="width: 200px;">
          <el-menu
            style="height: 100%;font-size: 20px"
            default-active="1"
            active-text-color="#ffd04b">
            <el-menu-item index="1" @click="componentName='userInfo'">用户信息</el-menu-item>
            <el-menu-item index="2" @click="componentName='shelvesGoods'">上架商品</el-menu-item>
            <el-menu-item index="3" @click="componentName='purchasedGoods'">已购商品</el-menu-item>
          </el-menu>
        </div>
        <div style="flex: 1;padding: 20px">
          <user-info :form="form" v-if="componentName==='userInfo'"></user-info>
          <purchased-goods :purchasedList="purchasedList" v-if="componentName==='purchasedGoods'"></purchased-goods>
          <shelves-goods
            :shelvesList="shelvesList"
            v-if="componentName==='shelvesGoods'"
            @down="handleDown"></shelves-goods>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import userInfo from '@/views/userCenter/components/userInfo'
import purchasedGoods from '@/views/userCenter/components/purchasedGoods'
import shelvesGoods from '@/views/userCenter/components/shelvesGoods'

export default {
    name: 'UserCenter',
    components: {
        userInfo, purchasedGoods, shelvesGoods
    },
    data () {
        return {
            componentName: 'userInfo',
            form: {},
            shelvesList: [],
            purchasedList: []
        }
    },
    methods: {

        async getData () {
        },

        async getUserInfo () {
        },
        async getshelverList () {
        },
        async getpurchasedList () {
        },

        async handleDown (id) {
            // await this.$ajax.
        }
    }
}
</script>

<style scoped lang="scss">
.usercenter__inner {
  height: 100%;
  width: 1280px;
  margin: auto;

  .usercenter__info {
    margin-top: 20px;
    height: 800px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 20px;
  }
}
</style>
