<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__logo">二手车交易网</div>
      <div class="header__menu">
        <el-menu :default-active="activeRoute" router mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="item in navList" :key="item.index" :index="item.index">{{ item.name }}</el-menu-item>
        </el-menu>
      </div>
      <div class="header__user">
        <el-link :underline="false" type="primary" style="margin: 15px" @click="goToUserCenter">用户中心</el-link>
        <el-link :underline="false" type="info" @click="doExit">退出</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EHeader',
    data () {
        return {

            navList: [
                { index: '/home/index', name: '首页' },
                { index: '/home/buy', name: '购买车辆' },
                { index: '/home/sell', name: '出售车辆' },
                { index: '/home/cart', name: '购物车' }
            ],
            activeRoute: '/home/index'
        }
    },
    watch: {
        $route (to, from) {
            console.log('path', to.path)
            this.activeRoute = to.path
        }
    },
    mounted () {
        this.activeRoute = window.location.pathname
    },
    methods: {
        handleSelect (key, keyPath) {
            this.activeRoute = key
            console.log(key)
            console.log(keyPath)
        },
        goToUserCenter () {
            this.$router.push({
                name: 'userCenter'
            })
        },
        doExit () {
            this.$router.replace({ path: '/' })
        }
    }
}
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  background: white;
  border-bottom: 1px solid #dedede;

  .header__inner {
    width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .carousel__map {
      margin-top: 10px;

      .el-carousel__item div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }

    .goods__content {
      height: 300px;
      background: #99a9bf;
    }
  }
}
</style>
