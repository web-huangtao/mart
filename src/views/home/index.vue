<template>
  <div class="container">
    <!-- search -->
    <div class="search">
      <form action="" onsubmit="return false" autocomplete="off" style="width: 100%;">
        <mt-search
          v-model="searchVal"
          cancel-text="取消"
          placeholder="搜索"
          @keyup.native.enter="search(searchVal)"
        />
      </form>
    </div>

    <!-- main -->
    <div class="main">
      <!-- banner swiper -->
      <div class="banner">
        <mt-swipe :auto="3000">
          <mt-swipe-item v-for="(item, index) in banners" :key="index">
            <img :src="item" >
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <!-- list -->
      <div v-for="(item, index) in list" :key="index" class="list">
        <div class="kindBanner">
          <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(url, i) in item.bannerArr" :key="i">
              <img :src="url" >
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="nav">
          <span>{{ item.nav }}</span>
        </div>
        <div class="kind">
          <div v-for="(items, j) in item.list1" :key="j" class="kind-item">
            <img :src="items.imgUrl">
            <p>{{ items.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- fo0ter -->
    <v-footer />
  </div>
</template>

<script>
import { banner, list } from '@/mock/index'
export default {
  data() {
    return {
      searchVal: '', // 搜索内容
      banners: [], // banner列表
      list: [] // 列表
    }
  },
  mounted() {
    this.getBanner()
    this.$indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    this.getList()
  },
  methods: {
    // 搜索
    search(val) {
      console.log(val)
      document.activeElement.blur()
    },
    // banner
    getBanner() {
      banner().then(res => {
        const { status, data, msg } = res
        if (status === 200) {
          this.banners = data.imgsArr
        } else {
          this.$toast(msg)
        }
      }).catch(err => {
        console.log(err)
        this.$toast('哎呀，出错啦~~~')
      })
    },
    // list
    getList() {
      list().then(res => {
        this.$indicator.close()
        const { code, list, msg } = res.data
        if (code === 10000) {
          this.list = list
        } else {
          this.$toast(msg)
        }
      }).catch(err => {
        console.log(err)
        this.$toast('哎呀，出错啦~~~')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    box-sizing: border-box;
    .search {
      height: 100px;
      padding: 0 10px;
      /deep/ .mint-search {
        height: 100%;
        .mint-searchbar {
          background: #f0f0f0;
          padding: 8px 0;
          .mintui-search {
            font-size: 40px;
            margin-right: 20px;
          }
          .mint-searchbar-core {
            font-size: 30px;
          }
        }
      }
    }
    .main {
      padding: 0 10px 110px 0;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      .banner {
        width: 100%;
        height: 300px;
        margin-bottom: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .list {
        .kindBanner {
          width: 100%;
          height: 800px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .nav {
          height: 60px;
          font-size: 30px;
          line-height: 60px;
          border-bottom: 2px solid #e5e5e5;
          span {
            display: inline-block;
            line-height: 60px;
            border-bottom: 2px solid red;
          }
        }
        .kind {
          width: 100%;
          height: 150px;
          padding: 10px 0;
          white-space: nowrap;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          &::-webkit-scrollbar {
            display: none;
          }
          .kind-item {
            display: inline-block;
            width: 100px;
            margin-left: 15px;
            img {
              width: 100px;
              height: 100px;
              margin-bottom: 10px;
            }
            p {
              font-size: 24px;
              color: #999;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
