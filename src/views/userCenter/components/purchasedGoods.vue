<template>
  <div style="height: 100%;">
    <div class="title">
      <h2>已购商品</h2>
    </div>
    <div class="purchased__info">
      <div class="button">
        <el-button type="danger">全部删除</el-button>
      </div>
      <el-table :data="cartData" border height="600px" @selection-change="handleSelectionChange">
        <el-table-column align="center" type="selection"></el-table-column>
        <el-table-column align="center" label="车辆图片" prop="img">
          <template slot-scope="scope">
            <div style="width: 50px;height: 50px;margin: auto">
              <img
                style="width: 100%;height: 100%"
                src="https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg"
                alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="品牌车型" prop="model" width="350"></el-table-column>
        <el-table-column align="center" label="商品价格(￥)" prop="price"></el-table-column>
        <el-table-column align="center" label="购买时间" width="150" prop="date"></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="{row}">
            <el-button type="danger" size="mini" plain @click="doTakeDown(row.carID)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
export default {
    name: 'PurchasedGoods',
    props: {
        purchasedList: {
            type: Array,
            require: false,
            default: () => {
                return []
            }
        }
    },
    data () {
        return {
            cartData: [
                {
                    carID: 1,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                },
                {
                    carID: 2,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                },
                {
                    carID: 3,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                },
                {
                    carID: 4,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                }, {
                    carID: 5,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                }, {
                    carID: 6,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                }, {
                    carID: 7,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                }, {
                    carID: 7,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                }, {
                    carID: 7,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                }, {
                    carID: 7,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                },
                {
                    carID: 7,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10'
                }
            ],
            checkedGoods: []
        }
    },
    methods: {
        handleSelectionChange (selection) {
            this.checkedGoods.splice(0, this.checkedGoods.length, ...selection)
        },
        delete (param) {
        }
    }
}
</script>

<style scoped lang="scss">

.title {
  border-bottom: 1px solid #efefef;
  padding: 0 20px 20px 20px;
}

.purchased__info {

  .button {
    text-align: right;
    padding: 20px 0;
  }
}

</style>
