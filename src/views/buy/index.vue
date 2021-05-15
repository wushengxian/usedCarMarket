<template>
  <div class="buy__inner">
    <div class="buy__content">
      <!--左侧搜索模块-->
      <div class="search__part">
        <el-form label-position="top" size="mini" :model="formData">
          <el-form-item label="品牌：">
            <el-select style="width: 295px" :value="formData.brand" filterable placeholder="所有"></el-select>
          </el-form-item>
          <el-form-item label="车系：">
            <el-select style="width: 295px" :value="formData.series" filterable placeholder="所有"></el-select>
          </el-form-item>
          <el-form-item label="最低价格：">
            <el-input :value="formData.price_start"></el-input>
          </el-form-item>
          <el-form-item label="最高价格：">
            <el-input :value="formData.price_end"></el-input>
          </el-form-item>
          <el-form-item label="年份：">
            <el-date-picker
              v-model="formData.years"
              size="mini"
              type="monthrange"
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="doSearch">搜索</el-button>
            <el-button @click="doReset">重置</el-button>
          </el-form-item>
        </el-form>
        <!--价格-->
      </div>
      <!--右侧商品展示模块-->
      <div class="goods__part">
        <div v-for="item in 9" :key="item" class="goods__item" @click="goToGoodsDetail(item)">
          <div class="good__img">
            <img
              src="http://img.hx2cars.com/upload/newimg1/M04/70/6B/Clo8w2Bz9dGAfvIfAAHizw7noP0580_small_800_600.jpg"
              alt=""
            />
          </div>
          <div class="good__info">
            <h4>2019年3月 迈凯伦 720S 4.0T Coupe</h4>
            <p>￥20000</p>
            <ul>
              <li>2020</li>
              <li>5.00万公里</li>
              <li>自动挡</li>
            </ul>
          </div>
          <div class="good__operation">
            <i class="el-icon-star-off" @click.stop="handleCollect"></i>
            <i class="el-icon-star-on" style="color:red" @click.stop="handleCancelCollect"></i>
            <i class="el-icon-share" @click.stop="handleShare"></i>
          </div>
        </div>

        <el-pagination :total="1" background layout="prev, pager, next" style="margin-top: 30px"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { ajax } from '@/utils/tools'

export default {
    name: 'Buy',
    data () {
        return {
            formData: {
                brand: '',
                series: '',
                price_start: null,
                price_end: null,
                models: '',
                years: ''
            },
            defaultPageParams: {
                currentPage: 1,
                pageSize: 6
            },
            goods: []
        }
    },
    mounted () {
        this.formData = { ...this.$route.params.params }
        this.getData(this.defaultPageParams)
    },
    methods: {
        async getData (pageParams) {
            const Params = pageParams
            const res = await ajax.get('/api/good/select', Params)
            console.log(res)
        },
        doSearch () {
            console.log(this.formData)
            this.getData(this.formData)
        },
        doReset () {
            this.formData = {}
        },
        goToGoodsDetail (param) {
            this.$router.push({
                name: 'goodsDetail',
                params: {
                    carID: param
                }
            })
        },
        handleCollect () {
            // 搜藏
        },
        handleCancelCollect () {
            // 取消搜藏
        },
        handleShare () {
            this.$message({
                message: '成功复制商品链接',
                type: 'success'
            })
        }
    }
}
</script>

<style scoped lang="scss">
.buy__inner {
  width: 1280px;
  margin: 20px auto;

  .buy__content {
    display: flex;
    height: 100%;

    .search__part {
      //width: 400px;
      height: 500px;
      background: #efefef;
      display: flex;
      justify-content: center;
      padding: 30px 20px;
    }

    .goods__part {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      cursor: pointer;

      .goods__item {
        width: 270px;
        box-shadow: 0 0 5px 0 #dedede;
        padding: 10px;

        &:nth-child(n + 4) {
          margin-top: 20px;
        }

        &:hover {
          box-shadow: 0 0 15px 0 #ababab;
        }

        .good__img {
          width: 100%;
          height: 180px;
          font-size: 0;
          //overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .good__info {
          width: 100%;
          height: 100px;
          background: white;
          white-space: nowrap;
          margin-top: 20px;
          overflow: hidden;

          h4 {
            overflow: hidden;
            text-overflow: ellipsis;
          }

          p {
            margin: 10px 0;
            font-family: Poppins;
            font-weight: 600;
            color: red;
          }

          ul {
            width: 100%;
            display: table;
            border: 1px solid #eee;
            color: #888;
            box-sizing: border-box;

            li {
              display: table-cell;
              text-align: center;
              border-right: 1px solid #eee;
            }
          }
        }

        .good__operation {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          i {
            padding: 0 5px;
          }

          .el-icon-star-off:hover {
            color: red !important;
          }

          .el-icon-star-on {
            border: red;
            font-size: 20px;

          }

          .el-icon-star-on:hover {
            color: #ababab !important;
          }

          .el-icon-share:hover {
            color: #409EFF !important;
          }
        }
      }
    }
  }
}
</style>
