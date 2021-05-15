<template>
  <div class="sell__inner">
    <div class="form__content">

      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <el-form
        label-width="130px"
        :model="formData"
        label-position="right"
        size="mini"
        :rules="rules"
        ref="form">
        <!--        <el-form-item label="车源照片">-->
        <!--          <el-upload-->
        <!--            :on-preview="handlePictureCardPreview"-->
        <!--            :on-remove="handleRemove"-->
        <!--            action="http://localhost:8079"-->
        <!--            list-type="picture-card"-->
        <!--            limit="6"-->
        <!--          >-->
        <!--            <i class="el-icon-plus"></i>-->
        <!--          </el-upload>-->
        <!--        </el-form-item>-->
        <el-form-item label="上传图片">
          <el-upload
            ref="Eupload"
            action="http://localhost:8080/api/good/imgUpload"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="uploadSuccess"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}" style="height: 100%">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              >
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>

        </el-form-item>

        <el-form-item label="品牌/车系">
          <el-cascader :options="options" filterable @change="handleChange">
            <template slot-scope="{ node, data }">
              <span>{{ data.label }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
          </el-cascader>
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
    </div>
  </div>
</template>

<script>
export default {
    name: 'Sell',
    data () {
        return {
            options: [
                {
                    value: 'zhinan',
                    label: '迈凯伦',
                    children: [
                        {
                            value: 'shejiyuanze',
                            label: '720S'
                        },
                        {
                            value: 'daohang',
                            label: '导航'

                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                        {
                            value: 'basic',
                            label: 'Basic'

                        },
                        {
                            value: 'form',
                            label: 'Form'

                        },
                        {
                            value: 'data',
                            label: 'Data'

                        },
                        {
                            value: 'notice',
                            label: 'Notice'

                        },
                        {
                            value: 'navigation',
                            label: 'Navigation'

                        },
                        {
                            value: 'others',
                            label: 'Others'
                        }
                    ]
                },
                {
                    value: 'ziyuan',
                    label: '资源',
                    children: [
                        {
                            value: 'axure',
                            label: 'Axure Components'
                        },
                        {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        },
                        {
                            value: 'jiaohu',
                            label: '组件交互文档'
                        }
                    ]
                }
            ],
            modelOptions: [],
            rules: {
                prices: [{ type: 'number', require: true, message: '请输入售卖价格' }],
                date: [{ type: 'date', require: true, message: '请输入上牌时间' }],
                mileage: [{ type: 'number', require: true, message: '请输入里程数' }]
            },
            formData: {
                brand: '',
                series: '',
                model: '手动挡',
                power: '汽油',
                emission: '未知',
                prices: '',
                date: '',
                describe: '',
                mileage: ''
            },
            fileList: [],
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
        }
    },
    methods: {
        uploadSuccess (response, file) {
            this.fileList.splice(0, this.fileList.length, ...file)
            console.log(response)
            console.log(file)
        },
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        async doSubmit (params) {
            console.log(this.fileList)
            this.$ajax.get('/api/good/add', params)
            this.$refs.Eupload.submit()
            // const res = await this.$refs.form.validate()
            // if (res) this.$message({ message: '提交成功', type: 'success' })
        },
        handleChange (value) {
            console.log(value)
            this.submit()
        }
    }
}
</script>

<style scoped lang="scss">
.sell__inner {
  width: 1280px;
  margin: 20px auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .form__content {
    padding: 20px 200px;

    .el-form-item {
      margin: 30px 0;
    }
  }
}
</style>
