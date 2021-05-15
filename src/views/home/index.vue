<template>
  <div>
    <div class="carouselSwiper swiper-no-swiping">
      <swiper :options="carouselSwiperOptions">
        <swiper-slide>
          <img style="width: 100%;height: 100%" src="@/assets/testimags/lunbotu1.jpg" alt=""/>
        </swiper-slide>
        <swiper-slide>
          <img style="width: 100%;height: 100%" src="@/assets/testimags/lunbotu2.jpg" alt=""/>
        </swiper-slide>
        <swiper-slide>
          <img style="width: 100%;height: 100%" src="@/assets/testimags/lunbotu3.jpg" alt=""/>
        </swiper-slide>
      </swiper>
    </div>
    <!--搜索模块-->
    <div class="search__bar">
      <div class="search__bar__inner">
        <div class="search__title">FIND CAR THAT YOU LOVE</div>

        <div class="search__content">
          <!--品牌-->
          <div class="search_item">

            <el-input v-model="searchParams.brand" placeholder="品牌"></el-input>
          </div>

          <div class="search_item">

            <el-input v-model="searchParams.series" placeholder="车系"></el-input>
          </div>

          <div class="search_item">

            <el-input v-model="searchParams.price_start" style="width:130px" placeholder="最低价格"></el-input>
            <span>--</span>
            <el-input v-model="searchParams.price_end" style="width:130px" placeholder="最高价格"></el-input>
          </div>

          <div>
            <el-button type="danger" @click="doSearch()">搜索</el-button>
          </div>
        </div>
      </div>
    </div>
    <!--今日推荐汽车模块-->
    <div class="daily__recommendation">
      <div class="daily__reco__inner">
        <div class="title">今&nbsp;&nbsp;日&nbsp;&nbsp;推&nbsp;&nbsp;荐</div>
        <div class="daily__reco__content">
          <div class="daily__reco__item" @click="goToGoodsDetail(item)">
            <div class="car__image">
              <img
                src="http://img.hx2cars.com/upload/newimg1/M04/70/6B/Clo8w2Bz9dGAfvIfAAHizw7noP0580_small_800_600.jpg"
                alt=""
              />
              <div class="cover"></div>
              <span
                class="introduction"
              >2006 / 32,000 km / 250 HP / petrol / automatic / Sports car/Coupe / Beige</span
              >
            </div>
          </div>
          <div class="daily__reco__item" @click="goToGoodsDetail(item)">
            <div class="car__image">
              <img
                src="http://img.hx2cars.com/upload/newimg1/M04/70/2E/Clo8w2BxhbiAAKlQAAHbj74Q5t8742_small_800_600.jpg"
                alt=""
              />
              <div class="cover"></div>
              <span
                class="introduction"
              >2014 / 32,000 km / 250 HP / petrol / automatic / Sports car/Coupe / Beige</span
              >
            </div>
          </div>
          <div class="daily__reco__item" @click="goToGoodsDetail(item)">
            <div class="car__image">
              <img
                src="http://img.hx2cars.com/upload/newimg1/M05/6A/00/Clo8w2AJMrWAbzyLAAIMiM-rdp4635_small_800_600.jpg"
                alt=""
              />
              <div class="cover"></div>
              <span
                class="introduction"
              >2006 / 32,000 km / 250 HP / petrol / automatic / Sports car/Coupe / Beige</span
              >
            </div>
          </div>
          <div class="daily__reco__item" @click="goToGoodsDetail(item)">
            <div class="car__image">
              <img
                src="http://img.hx2cars.com/upload/newimg2/M01/6D/89/Clo8xGBQZsCAFjtXAAKw4YWJ0-Q896_small_800_600.jpg"
                alt=""
              />
              <div class="cover"></div>
              <span
                class="introduction"
              >2006 / 32,000 km / 250 HP / petrol / automatic / Sports car/Coupe / Beige</span
              >
            </div>
          </div>
          <div class="daily__reco__item" @click="goToGoodsDetail(item)">
            <div class="car__image">
              <img
                src="http://img.hx2cars.com/upload/newimg1/M02/6F/45/Clo8w2BkIRyAQZsjAANWMlvZoTE020_small_800_600.jpg"
                alt=""
              />
              <div class="cover"></div>
              <span
                class="introduction"
              >2006 / 32,000 km / 250 HP / petrol / automatic / Sports car/Coupe / Beige</span
              >
            </div>
          </div>
          <div class="daily__reco__item" @click="goToGoodsDetail(item)">
            <div class="car__image">
              <img
                src="http://img.hx2cars.com/upload/newimg2/M04/6B/E6/Clo8xGA3YpWAA-_5AARtKswibKc072_small_800_600.jpg"
                alt=""
              />
              <div class="cover"></div>
              <span
                class="introduction"
              >2006 / 32,000 km / 250 HP / petrol / automatic / Sports car/Coupe / Beige</span
              >
            </div>
          </div>
          <div class="daily__reco__item" @click="goToGoodsDetail(item)">
            <div class="car__image">
              <img
                src="http://img.hx2cars.com/upload/newimg1/M06/49/74/Clo8w16X3YOAEfITAAIdcR4YRcc525_small_800_600.jpg"
                alt=""
              />
              <div class="cover"></div>
              <span
                class="introduction"
              >2006 / 32,000 km / 250 HP / petrol / automatic / Sports car/Coupe / Beige</span
              >
            </div>
          </div>
          <div class="daily__reco__item" @click="goToGoodsDetail(item)">
            <div class="car__image">
              <img
                src="http://img.hx2cars.com/upload/newimg1/M07/68/6D/Clo8w1_1zaSAOcWTAAMFsaLHjNU750_small_800_600.jpg"
                alt=""
              />
              <div class="cover"></div>
              <span
                class="introduction"
              >2006 / 32,000 km / 250 HP / petrol / automatic / Sports car/Coupe / Beige</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--今日新品汽车模块-->
    <div class="newCar__inner">
      <swiper :options="newCarSwiperOptions">
        <swiper-slide v-for="item in 6" :key="item">
          <div class="newCar_item">
            <div class="newCar_item_img"><img
              src="http://demo.kangjingept.com:8020/cssthemes6/dsdgfsdgd/assets/media/content/posts/360x250/1.jpg"
              alt=""/>
              <div class="newCar_item_price">￥45.000</div>
            </div>
            <div class="newCar_item_introduce">
              <ul>
                <li>国一</li>
                <li>自动挡</li>
                <li>35km</li>
                <li>2020</li>
              </ul>
            </div>
            <div class="newCar_item_remark">
              <div class="newCar_item_name">
                <div class="name__before"></div>
                <h3>Lexus GX 490i Hybird</h3>
              </div>
              <div class="newCar_item_text">
                Duis aute irure reprehender voluptate velit ese acium fugiat nulla pariatur excepteur ipsum.
                Duis aute irure reprehender voluptate velit ese acium fugiat nulla pariatur excepteur ipsum.
                Duis aute irure reprehender voluptate velit ese acium fugiat nulla pariatur excepteur ipsum.
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div>

    </div>

    <!--欢迎公告栏模块-->
    <div class="test__center">
      <div class="test__inner">
        <h2>WELCOME TO CAR DEALER WEBSITE</h2>
        <strong
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.</strong
        >
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            isLogin: false,
            data: [],
            brandOption: [
                { label: '奔驰', value: '奔驰' },
                { label: '宝马', value: '宝马' },
                { label: '奥迪', value: '奥迪' }
            ],
            modalOption: [],
            priceOption: [],
            searchParams: {
                brand: '',
                series: '',
                price_start: null,
                price_end: null
            },
            carouselSwiperOptions: {
                loop: true, // 循环轮播
                autoplay: true,
                speed: 3000,
                effect: 'fade'
            },
            newCarSwiperOptions: {
                autoplay: true,
                speed: 3000,
                loop: true,
                slidesPerView: 3,
                centeredSlidesBounds: true,
                spaceBetween: 30,
                initialSlide: 0

            },
            caurouselData: {},
            hotGoodData: {}

        }
    },
    mounted () {
        this.getData()
    },
    computed: {},
    methods: {
        async getData () {
            const res = await this.$ajax.get('api/good/select')

            console.log(res)
        },
        doSearch () {
            this.$router.push({
                name: 'buy',
                params: {
                    params: this.searchParams
                }
            })
        },
        goToGoodsDetail (param) {
            this.$router.push({
                name: 'goodsDetail',
                params: {
                    carID: param
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">

.search__bar {

  margin: 20px 0;

  .search__bar__inner {
    width: 1280px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);

    .search__title {
      font-size: 30px;

    }

    .search__content {
      width: 100%;
      display: flex;
      margin-top: 30px;
      align-items: center;
      justify-content: center;

      .search_item {
        display: flex;
        align-items: center;
        margin-right: 20px;

        span {
          white-space: nowrap;
          margin: 0 15px;
        }
      }
    }
  }
}

.daily__recommendation {
  margin: 30px 0;

  .daily__reco__inner {
    width: 1280px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);

    h1 {
      margin-bottom: 20px;
    }

    .daily__reco__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      .daily__reco__item {
        width: 300px;
        text-align: center;
        //box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
        margin-bottom: 20px;
        cursor: pointer;

        .car__image {
          width: 100%;
          overflow: hidden;
          position: relative;
          font-size: 0;

          img {
            width: 100%;
            height: 100%;
          }

          .introduction {
            display: none;
            font-size: 13px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
            color: white;
            font-style: oblique;
          }

          &:before {
            content: '';
            background: rgba(32, 152, 209, 0.6);
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transform: translateY(100%);
            transition: all 300ms ease-in-out 0s;
          }
        }

        .car__info {
          height: 80px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;

          .car__info__msg {
            width: 100%;
            display: flex;
            justify-content: space-around;

            span {
              text-align: center;
            }
          }
        }

        &:hover {
          box-shadow: 0 0 15px 0 #ababab;

          .car__image:before {
            transform: translateY(0);
          }

          .introduction {
            display: block;
          }
        }
      }
    }
  }
}

.newCar__inner {
  width: 1280px;
  margin: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 20px;

  .swiper-container {
    padding: 30px 0;
  }

  .newCar_item {
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 15px 0 #ababab;
    }

    .newCar_item_img {
      height: 250px;
      position: relative;

      .newCar_item_price {
        width: 100px;
        height: 30px;
        background: #d01818;
        position: absolute;
        bottom: 10px;
        right: 0px;
        text-align: center;
        line-height: 30px;
        font-size: 18px;
        font-weight: bolder;
        color: white;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .newCar_item_introduce {
      padding: 15px 10px 0;

      ul {
        width: 100%;
        display: table;
        border: 1px solid #eee;
        color: #888;

        li {
          display: table-cell;
          text-align: center;
          padding: 6px;

        }
      }
    }

    .newCar_item_remark {
      padding-top: 20px;

      .newCar_item_name {
        display: flex;
        align-items: center;

        .name__before {
          width: 15px;
          height: 3px;
          margin-right: 15px;
          background: red;
        }
      }

      .newCar_item_text {
        padding: 5px 0 0 10px;
        font-size: 12px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }

}

.test__center {
  height: 200px;
  display: flex;
  align-items: center;
  background: #fff;
  margin: 20px;

  .test__inner {
    width: 1280px;
    margin: auto;
    text-align: center;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;

    h2 {
      margin-bottom: 15px;
    }

    p {
      margin-top: 10px;
    }
  }
}

.title {
  text-align: center;
  font-weight: bolder;
  padding: 10px;
  font-size: 30px;
  color: #2d3a4b;
}

</style>
