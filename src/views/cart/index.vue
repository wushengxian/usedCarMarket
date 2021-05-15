<template>
  <div class="cart">
    <div class="cart__inner">
      <div class="cart__list">
        <el-table :data="cartData" max-height="700" border @selection-change="handleSelectionChange">
          <el-table-column align="center" type="selection"></el-table-column>
          <el-table-column align="center" label="车辆图片" prop="img">
            <template slot-scope="scope">
              <div style="width: 50px;height: 50px;margin: auto">
                <img style="width: 100%;height: 100%" src="../../assets/testimags/swipercar1.jpg" alt=""/>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="品牌车型" prop="model" width="400px"></el-table-column>
          <el-table-column align="center" label="商品价格(￥)" prop="price"></el-table-column>
          <el-table-column align="center" label="添加时间" prop="date"></el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="{ row }">
              <el-button type="primary" size="mini" plain @click="viewGoodsDetail(row.carID)">查看</el-button>

              <el-popover
                placement="top"
                width="180"
                v-model="isViewDelete">
                <p style="padding: 10px 0">确定将该商品移出购物车？</p>
                <div style="text-align: center; margin: 0">
                  <el-button size="mini" @click="isViewDelete = false">取消</el-button>
                  <el-button type="primary" size="mini" @click="isViewDelete = false">确定</el-button>
                </div>
                <el-button slot="reference" type="danger" size="mini" plain>删除</el-button>
              </el-popover>

              <!--              <el-button type="danger" size="mini" plain>删除</el-button>-->
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="cart__bottom">
        <div class="cart__bottom__left">
          <el-link
            type="danger"
            underline="false"
            style="margin-right: 10px;font-size: 15px"
            @click="remove"
          >删除
          </el-link>
          <el-link type="info" underline="false" style="font-size: 15px">清除无效商品</el-link>
        </div>
        <div class="cart__bottom__right">
          <div>
            已选商品:
            <span style="color: #d01818">{{ total.number }}</span>
          </div>
          <div style="margin: 0 10px">
            合计:
            <span style="color: #d01818">￥{{ total.prices }}</span>
          </div>
          <el-button type="primary">提交订单</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            cartData: [
                {
                    carID: 1,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '2019年3月 迈凯伦 720S 2019款 4.0T Coupe 自动档',
                    price: 285000,
                    date: '2021/4/10'
                }
            ],
            checkedGoods: [],
            isViewDelete: false
        }
    },
    computed: {
        total () {
            let prices = 0
            this.checkedGoods.map(item => {
                prices += item.price
            })
            return {
                number: this.checkedGoods.length,
                prices: prices
            }
        }
    },
    methods: {
        handleSelectionChange (selection) {
            this.checkedGoods.splice(0, this.checkedGoods.length, ...selection)
        },
        viewGoodsDetail (param) {
            this.$router.push({
                name: 'goodsDetail',
                params: {
                    carID: param
                }
            })
        },
        remove () {
            this.cartData = []
            this.cartData.splice(0, this.cartData.length)
        }
    }
}
</script>

<style scoped lang="scss">
.cart {
  .cart__inner {
    width: 1280px;
    margin: 20px auto;
    max-height: 800px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;

    .cart__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      .cart__bottom__right {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
