<template>
  <div class="goods__detail__inner">
    <div class="goods__detail__info">
      <div class="car__detail__top">
        <div class="car__top__left">
          <div class="car__top__left__header">
            <div class="header__left">
              <h1>2019款 迈凯伦 720S </h1>
              <h4>2019年3月 4.0T Coupe 自动档 </h4>
            </div>
            <div class="header__right">
              <i class="el-icon-star-off" @click.stop="handleCollect"></i>
              <i class="el-icon-star-on" style="color:red" @click.stop="handleCancelCollect"></i>
              <i class="el-icon-share" @click.stop="handleShare"></i>
            </div>
          </div>
          <div class="main__swiper">
            <el-carousel height="580px" indicator-position="none">
              <el-carousel-item>
                <img style="width: 100%;height: 100%" src="../../assets/testimags/swipercar1.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img style="width: 100%;height: 100%" src="../../assets/testimags/swipercar2.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img style="width: 100%;height: 100%" src="../../assets/testimags/swipercar3.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img style="width: 100%;height: 100%" src="../../assets/testimags/swipercar4.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img style="width: 100%;height: 100%" src="../../assets/testimags/swipercar5.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img style="width: 100%;height: 100%" src="../../assets/testimags/swipercar6.jpg" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="car__top__right">
          <div class="prices">
            ￥28000
          </div>
          <dl class="car__detail">
            <dt>品牌型号</dt>
            <dd>迈凯伦 720S</dd>
            <dt>燃油类型</dt>
            <dd>汽油</dd>
            <dt>上牌时间</dt>
            <dd>2019年3月</dd>
            <dt>行驶里程</dt>
            <dd>1.9万公里</dd>
            <dt>汽车挡位</dt>
            <dd>自动档</dd>
            <dt>汽车类型</dt>
            <dd>跑车</dd>
            <dt>排放标准</dt>
            <dd>国一</dd>
            <dt>车身颜色</dt>
            <dd>棕色 红色</dd>
          </dl>
          <div class="option">
            <el-button
              ref="viewphone"
              style="width: 100%;height:50px;margin-bottom: 10px;font-size: 20px"
              type="info"
              plain
              icon="el-icon-phone"
              @click="viewPhone()">点击查看联系方式
            </el-button>
            <div style="display: flex;justify-content:space-between">
              <el-button style="width: 45%;height:50px;font-size: 20px" type="danger" @click="addCart">加入购物车
              </el-button>
              <el-button style="width: 45%;height:50px;font-size: 20px" type="primary" @click="viewSelectDialog">立即购买
              </el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="car__detail__center">
        <div class="car__describe">
          <div class="title">
            车辆描述
          </div>
          <div class="car__describe__info">
            福州二手奥迪A5——2019款 Cabriolet 45 TFSI quattro 运动版 国V
            该车原版原漆，实表，四驱顶配，车况美丽价格实惠
            联系我时，请说在淘车二手车上看到的，谢谢！
          </div>
        </div>
        <!--        <div class="car__image">-->
        <!--          <div class="title">-->
        <!--            车辆照片-->
        <!--          </div>-->
        <!--          <div class="car__image__info">-->
        <!--            <ul>-->
        <!--              <li>-->
        <!--                <img src="../../assets/testimags/swipercar1.jpg" alt="">-->
        <!--              </li>-->
        <!--              <li>-->
        <!--                <img src="../../assets/testimags/swipercar2.jpg" alt="">-->
        <!--              </li>-->
        <!--              <li>-->
        <!--                <img src="../../assets/testimags/swipercar3.jpg" alt="">-->
        <!--              </li>-->
        <!--              <li>-->
        <!--                <img src="../../assets/testimags/swipercar4.jpg" alt="">-->
        <!--              </li>-->
        <!--              <li>-->
        <!--                <img src="../../assets/testimags/swipercar5.jpg" alt="">-->
        <!--              </li>-->
        <!--              <li>-->
        <!--                <img src="../../assets/testimags/swipercar6.jpg" alt="">-->
        <!--              </li>-->
        <!--            </ul>-->
        <!--          </div>-->
        <!--        </div>-->
        <div class="user__comments">
          <div class="title">
            用户评论
          </div>
          <div class="car__describe__info">
            <ul>
              <li
                v-for="item in 4"
                :key="item"
                style="padding:15px 20px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);margin-bottom: 30px">
                <div class="comment__info">
                  <div class="user">
                    <div
                      class="user__head"
                      style="width: 30px;height: 30px;border-radius: 50%;background: #111111"></div>
                    <span>111111111111</span>
                  </div>
                  <div class="comments">
                    <p style="border-bottom:1px solid #efefef;padding-bottom: 10px">
                      请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问请问</p>
                    <ul class="replay">
                      <li
                        v-for="item in 6"
                        :key="item"
                        style="box-sizing:border-box;margin: 5px 15px;border-bottom: 1px solid #efefef">
                        <div class="replay__user__head">
                          <span>111111111111</span>
                          <div
                            style="width: 25px;height: 25px;border-radius: 50%;background: #111111;margin-left: 10px"></div>
                        </div>
                        <div class="replay__info">
                          回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复
                          回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复回复
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="car__detail__bottom"></div>
    </div>
    <el-dialog width="400px" :visible="isViewPhone" @close="isViewPhone = false">
      <div class="contact">
        <div class="head__img">
          <el-avatar
            :size=100
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="contact__info">
          <el-form label-width="80px" label-position="left">
            <el-form-item label="手机号码"><span id="phone">15980074892</span> <i
              class="el-icon-copy-document"
              v-wsx-copy="222"></i>
            </el-form-item>
            <el-form-item label="邮箱"><span id="email">993746470@qq.com</span> <i
              class="el-icon-copy-document"
            ></i>
            </el-form-item>
          </el-form>

        </div>
      </div>
    </el-dialog>
    <el-dialog :visible="isViewSelect" @close="isViewSelect = false">
      <el-button @click="offline">线下提车</el-button>
      <el-button @click="online">平台交易</el-button>
    </el-dialog>
    <el-dialog>

    </el-dialog>
  </div>
</template>

<script>

export default {
    name: 'GoodsDetail',
    data () {
        return {
            carID: '',
            isViewPhone: false,
            isViewSelect: false
        }
    },
    methods: {
        async getData () {
            const res = await this.$ajax.get()
        },
        async viewPhone () {
            this.isViewPhone = true
        },
        addCart () {
            this.$message({ message: '添加购物车成功', type: 'success', duration: 2000 })
        },
        handleCollect () {
            // 收藏
        },
        handleCancelCollect () {
            // 取消搜藏
        },
        handleShare () {
            // 分享
        },
        viewSelectDialog () {
            this.isViewSelect = true
        },
        offline () {
            this.isViewSelect = false
            this.isViewPhone = true
        },
        online () {
        }
    },

    mounted () {
        console.log(this.$route.params)
        console.log(this.$route.params.carID)
        this.carID = this.$route.params.carID
    }

}

</script>

<style scoped lang="scss">
.goods__detail__inner {
  width: 1280px;
  margin: auto;

  .goods__detail__info {
    margin: 20px 0;

    .car__detail__top {
      display: flex;
      padding: 30px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      .car__top__left {
        width: 750px;

        .car__top__left__header {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .header__left {
          }

          .header__right {
            i {
              cursor: pointer;
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

        .main__swiper {
          height: 550px;

        }

      }

      .car__top__right {
        flex: 1;
        margin-left: 50px;
        background: #efefef;

        .prices {
          height: 80px;
          background: #d01818;
          text-align: center;
          line-height: 80px;
          color: white;
          font-size: 30px;
          font-weight: bolder;
        }

        .car__detail {
          padding: 40px 37px 23px;
          background: #efefef;

          dt {
            float: left;
            width: 130px;
            font-weight: 500;
            color: #888;
          }

          dd {
            text-align: right;
            border-bottom: 1px solid #ddd;
            margin-bottom: 22px;
            margin-left: 0;
            padding-bottom: 13px;
            padding-left: 130px;
            font-weight: 600;
            color: #222;
          }
        }
      }

    }

    .car__detail__center {

      .title {
        height: 42px;
        line-height: 28px;
        font-size: 18px;
        color: #111;
        clear: both;

        &:before {
          content: "";
          width: 3px;
          height: 22px;
          background: #f50013;
          float: left;
          margin-right: 8px;
          margin-top: 3px;
        }
      }

      .car__describe, .car__image, .user__comments {
        border-radius: 3px;
        padding: 20px;
        font-size: 14px;
        color: #666;
        line-height: 22px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin-top: 20px;
      }

      .user__comments {
        .title {
          border-bottom: 1px solid #efefef

        }

        .car__describe__info {
          ul {
            li {
              .comment__info {

                .user {
                  display: flex;
                  align-items: center;

                  .user__head {
                    margin-right: 10px;
                  }
                }

                .comments {
                  padding: 10px 40px;

                  .replay {

                    li {
                      .replay__user__head {
                        padding: 5px 0;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                      }

                      .replay__info {
                        padding: 5px 15px;
                      }
                    }

                  }
                }

              }
            }
          }
        }
      }

      .car__image {
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          li {
            width: 48%;
            margin: 5px;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }

}

.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .contact__info {
    font-size: 18px;

    .el-form-item {
      margin: 0;

      .el-icon-copy-document {
        margin-left: 5px
      }

      .el-icon-copy-document:hover {
        cursor: pointer;
        color: #409EFF;

      }
    }

    p {
      padding: 10px;

      span {
        font-size: 20px;
      }
    }
  }
}

</style>
