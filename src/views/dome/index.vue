<template>
  <div class="container">
    <div v-if="phoneType === 'ios'" class="ios">
      <div style="width: 100%; height: 100px"></div>
      <div class="sticky">导航栏</div>
      <!-- 列表 -->
      <mt-loadmore :bottom-method="loadMore" :bottom-all-loaded="allLoaded" :bottom-distance=30 bottomPullText="上拉加载" ref="loadmore">
        <ul class="list">
          <li class="list-item" v-for="(item, index) in list" :key="index">
            <img :src="item.img">
            <p class="list-item-desc">{{ item.desc }}</p>
            <p class="list-item-bottom">
              <span class="price"><span class="icon">￥</span>{{ item.price }}</span>
              <span>{{ item.sales }}件已售</span>
              <span class="list-item-bottom-icon"></span>
            </p>
          </li>
        </ul>
      </mt-loadmore>
    </div>
    <div v-if="phoneType === 'android'" class="android">
      <div style="width: 100%; height: 100px"></div>
      <div class="sticky" :class="navBarFixed == true ? 'navBarWrap' :''">导航栏</div>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        class="list"
      >
        <li class="list-item" v-for="(item, index) in list" :key="index">
          <img :src="item.img">
          <p class="list-item-desc">{{ item.desc }}</p>
          <p class="list-item-bottom">
            <span class="price"><span class="icon">￥</span>{{ item.price }}</span>
            <span>{{ item.sales }}件已售</span>
            <span class="list-item-bottom-icon"></span>
          </p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { kind } from '@/mock/kind'
export default {
  data() {
    return {
      phoneType: null, // 手机类型
      navBarFixed: false,
      page: 0,
      size: 20,
      allLoaded: false, // 是否加载完毕
      list: [] // 列表
    }
  },
  mounted() {
    this.downApp()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 49) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    },
    loadMore() {
      this.page++
      this.kindList()
    },
    // 列表
    kindList() {
      const params = {
        page: this.page,
        size: this.size
      }
      kind(params).then(res => {
        const { code, data, msg } = res.data
        if (code === 10000) {
          const datas = data.data.list
          this.list = this.list.concat(datas)
        } else {
          this.$toast(msg)
        }
        if (this.phoneType === 'ios') {
          this.$refs.loadmore.onBottomLoaded()
        }
      }).catch(err => {
        console.log(err)
        this.$toast('哎呀，出错啦~~~')
      })
    },
    downApp() {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { // Ios
        this.phoneType = 'ios'
      } else if (/(Android)/i.test(navigator.userAgent)) { // Android终端
        this.phoneType = 'android'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    .ios {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      -webkit-overflow-scrolling: touch;
      .sticky {
        width: 100%;
        height: 50px;
        background:red;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
      }
    }
    .android {
      .sticky {
        width: 100%;
        height: 50px;
        background:red;
      }
      .navBarWrap {
        position:fixed;
        top:0;
        z-index:999;
      }
    }
    .list {
      flex: 1;
      width: 100%;
      padding: 15px;
      background: #f0f0f0;
      box-sizing: border-box;
      overflow: hidden;
      .list-item {
        float: left;
        width: 49%;
        border-radius: 10px;
        margin: 0 2% 15px 0;
        padding-bottom: 10px;
        background: #fff;
        &:nth-child(2n) {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 350px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          margin-bottom: 10px;
        }
        .list-item-desc {
          padding: 0 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-bottom: 10px;
        }
        .list-item-bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
          padding: 0 10px;
          font-size: 28px;
          .price {
            color: #FB5C55;
            .icon {
              font-size: 20px;
            }
          }
          .list-item-bottom-icon {
            width: 30px;
            height: 30px;
            background: url('../../assets/imgs/icon/cart.png') no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
</style>
