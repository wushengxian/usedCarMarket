<template>
  <div style="height: 100%;">
    <div class="title">
      <h2>上架商品</h2>
    </div>
    <div class="shelves__info">
      <div class="button">
        <el-button type="danger">全部下架</el-button>
      </div>
      <el-table :data="cartData" border height="600px" @selection-change="handleSelectionChange">
        <el-table-column align="center" type="selection" :selectable="isSelectable"></el-table-column>
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
        <el-table-column align="center" label="上架时间" width="100" prop="date"></el-table-column>
        <el-table-column align="center" label="是否售出" width="80" prop="isSelled">
          <template slot-scope="{row}">
            {{ row.isSelled | renderIsSelled }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template slot-scope="{row}">
            <el-button type="primary" size="mini" plain @click="doModify(row.carID)" :disabled="row.isSelled">修改
            </el-button>
            <el-popconfirm
              title="确定下架？"
              confirm-button-type="text"
              cancel-button-type="primary"
              @confirm="handleDown(row.carID)"
            >
              <el-button size="mini" plain type="danger" slot="reference" :disabled="row.isSelled">下架
              </el-button>
            </el-popconfirm>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible="isView" @close="isView = false">
      <el-form
        label-width="130px"
        :model="formData"
        label-position="right"
        size="mini"
        :rules="rules"
        ref="form">

        <el-form-item label="品牌">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="车系">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="车型">
          <el-cascader :options="modelOptions" filterable>
            <template slot-scope="{ node, data }">
              <span>{{ data.label }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
          </el-cascader>
        </el-form-item>

        <el-form-item label="售卖价格(￥)" prop="prices">
          <el-input v-model="formData.prices" style="width: 220px"></el-input>
        </el-form-item>
        <el-form-item label="上牌日期" prop="date">
          <el-date-picker :editable="false" v-model="formData.date" type="month" placeholder="选择月"></el-date-picker>
        </el-form-item>
        <el-form-item label="行驶里程(km)" prop="mileage">
          <el-input v-model="formData.mileage" style="width: 220px"></el-input>
        </el-form-item>
        <el-form-item label="汽车挡位">
          <el-radio-group v-model="formData.model">
            <el-radio-button label="自动挡"></el-radio-button>
            <el-radio-button label="手动挡"></el-radio-button>
            <el-radio-button label="手自一体"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="燃油类型">
          <el-radio-group v-model="formData.power">
            <el-radio-button label="汽油"></el-radio-button>
            <el-radio-button label="柴油"></el-radio-button>
            <el-radio-button label="电动"></el-radio-button>
            <el-radio-button label="混合动力"></el-radio-button>
            <el-radio-button label="新能源"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="排放标准">
          <el-radio-group v-model="formData.emission">
            <el-radio-button label="未知"></el-radio-button>
            <el-radio-button label="国一"></el-radio-button>
            <el-radio-button label="国二"></el-radio-button>
            <el-radio-button label="国三"></el-radio-button>
            <el-radio-button label="国四"></el-radio-button>
            <el-radio-button label="国五"></el-radio-button>
            <el-radio-button label="国六"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="车况描述">
          <el-input v-model="formData.describe" type="textarea"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="doSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name: 'ShelvesGoods',
    props: {
        shelvesList: {
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
                    date: '2021/4/10',
                    isSelled: false
                },
                {
                    carID: 2,
                    img: 'https://img2.hx2car.com/9cfbd5029dc4588936c92ebd06e041c4_small_800_600.jpg',
                    model: '奥迪A5 2017款 Sportback 40 TFSI 时尚版',
                    price: 285000,
                    date: '2021/4/10',
                    isSelled: true
                }
            ],
            modelOptions: [],
            isView: false,
            formData: {}
        }
    },
    filters: {
        renderIsSelled (isSelled) {
            if (isSelled) return '是'
            return '否'
        }
    },
    methods: {
        handleSelectionChange () {

        },
        doModify () {
            this.isView = true
        },

        doSubmit () {
        },

        isSelectable (row, index) {
            if (row.isSelled) return false
            return true
        },
        handleDown (id) {
            console.log(id)
            this.$emit('down', id)
        }
    }

}
</script>

<style scoped lang="scss">
.title {
  border-bottom: 1px solid #efefef;
  padding: 0 20px 20px 20px;
}

.shelves__info {

  .button {
    text-align: right;
    padding: 20px 0;
  }
}
</style>
